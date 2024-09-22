const express = require('express');
const app = express();
app.use(express.json());

const authenticateUser = require('./authMiddleware');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const validateInput = (req, res, next) => {
    const { email, password } = req.body;
    if(!emailRegex.test(email) || !password) {
        return res.status(400).send("Invalid input file")
    }
    next()
};

function getUserData(user) {
    return {
        id: user.id,
        name: user.name,
        email: user.email
    }
}

app.use(authenticateUser)
app.post('/users', validateInput, (req, res) => {
    const userData = getUserData(req.user);
    res.send(userData);
})

if(require.main === module) {
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })
}

module.exports = { app, validateInput, getUserData };
