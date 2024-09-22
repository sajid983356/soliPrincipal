const express = require('express');
const app = express();
app.use(express.json());

const users = [
    { id: 1, name: 'sajid', email: 'sajid@gmail.com', password: '1234'},
    { id: 2, name: 'addy', email: 'addy@gmail.com', password: '1234' },
]

function authenticateUser(req, res, next) {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password)
    if (!user) {
        return res.status(401).send('Authentication failed');
    }

    req.user = user;
    next();
}

module.exports = authenticateUser;