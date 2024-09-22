const express = require('express');
const app = express();
app.use(express.json());

const users = [
    { id: 1, name: 'sajid', email: 'sajid@gmail.com', password: '1234'},
    { id: 2, name: 'addy', email: 'addy@gmail.com', password: '1234' },
]
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post('/users', (req, res) => {

    //input validation
    const { email, password } = req.body;
    if(!emailRegex.test(email) || !password) {
        return res.status(400).send("Invalid input file")
    }

    //authentications
    const user = users.find(u => u.email === email && u.password === password)
    if (!user) {
        return res.status(401).send('Authentication failed');
    }

    //response schema
    res.send({
        id: user.id,
        name: user.name,
        email: user.email
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})