const express = require('express');
const app = express();
app.use(express.json());


const validateInput = (req, res, next) => {
    const { type, message, recipient } = req.body;
    if(!type || !message || !recipient) {
        return res.status(400).send("Invalid input data")
    }
    next()
};

const formatMessage = ({ message }) => {
    return `[NOTIFICATION]: ${message}`
}

const sendEmail = (recipient, formattedMessage) => {
    console.log(`Sending email to ${recipient}: ${formattedMessage}`);
    // logic to send email
};

const sendSMS = (recipient, formattedMessage) => {
    console.log(`Sending SMS to ${recipient}: ${formattedMessage}`);
    // logic to send SMS
};

const sendNotification = ( { type, recipient, formattedMessage }) => {
    switch(type) {
        case 'email':
            sendEmail(recipient, formattedMessage);
            break;
        case 'sms':
            sendSMS(recipient, formattedMessage);
            break;
        default:
            console.log('Invalid notification type');
    }
}

const saveToDatabase = ({ type, message, recipient }) => {
    console.log('Saving to database call:', type, message, recipient);
    return { success: true };  // Simulating a successful response
};

const getUserData = (dbResponse) => {
    return {
        id: dbResponse.id,
        name: dbResponse.name,
        email: dbResponse.email
    }
}

app.post('/api/v1/notifications', validateInput, (req, res) => {
    
    const formattedMessage = formatMessage(req.body);    
    sendNotification({ ...req.body, formattedMessage});

    const dbResponse = saveToDatabase(req.body);
    if (dbResponse.error) {
        console.log('Error saving message to database:', dbResponse.error);
    }

    const userData = getUserData(dbResponse);
    res.send(userData)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})