const express = require('express');
const app = express();
app.use(express.json());


app.post('/api/v1/notifications', (req, res) => {

    //input validation
    const { type, message, recipient } = req.body;
    if(!type || !message || !recipient) {
        return res.status(400).send("Invalid input data")
    }

    // Formatting message
    const formattedMessage = `[NOTIFICATION]: ${message}`;
    
    // Sending notification
    if (type === 'email') {
        console.log(`Sending email to ${recipient}: ${formattedMessage}`);
    } else if (type === 'sms') {
        console.log(`Sending SMS to ${recipient}: ${formattedMessage}`);
    }

    // Saving the message (Database call)
    const dbResponse = saveToDatabase({ type, recipient, message: formattedMessage });
    if (dbResponse.error) {
        console.log('Error saving message to database:', dbResponse.error);
    } else {
        console.log('Notification saved successfully');
    }

    // Simulating database save function
    const saveToDatabase = (notification) => {
        console.log('Saving to database:', notification);
        return { success: true };
    };


    //response schema
    res.send({
        id: dbResponse.id,
        name: dbResponse.name,
        email: dbResponse.email
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})