const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/v1/orders', (req, res) => {
    const order = req.body;

    // Validate order
    if (!order.items || order.items.length === 0) {
        return res.status(400).send("Invalid order: No items provided.");
    }

    // Check inventory
    const inventory = {
        item1: 10,
        item2: 5,
    };
    
    for (const item of order.items) {
        if (!inventory[item.name] || inventory[item.name] < item.quantity) {
            return res.status(400).send(`Insufficient stock for ${item.name}`);
        }
    }

    // Calculate total price
    let total = 0;
    order.items.forEach(item => {
        total += item.price * item.quantity;
    });
    if (order.discount) {
        total -= order.discount;
    }

    // Process payment
    console.log(`Processing payment of $${total}`);

    // Simulating successful payment
    const paymentSuccess = true;
    if (!paymentSuccess) {
        return res.status(400).send("Payment processing failed.");
    }

    // Send notification
    console.log(`Sending notification for order:`, order);

    // Return final order details
    res.send({ ...order, total });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
