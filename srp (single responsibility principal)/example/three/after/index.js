const express = require('express');
const app = express();
app.use(express.json());

const validateOrder = (order) => {
    if (!order.items || order.items.length === 0) {
        throw new Error("Invalid order: No items provided.");
    }
};

const checkInventory = (items) => {
    const inventory = {
        item1: 10,
        item2: 5,
    };
    for (const item of items) {
        if (!inventory[item.name] || inventory[item.name] < item.quantity) {
            throw new Error(`Insufficient stock for ${item.name}`);
        }
    }
};

const calculateTotal = (items, discount = 0) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return total - discount;
};

const processPayment = (amount) => {
    console.log(`Processing payment of $${amount}`);
    return { success: true };
};

const sendNotification = (order) => {
    console.log(`Sending notification for order:`, order);
};

const processResponseSchema = (orderDetails) => {
    return orderDetails;
}

const processOrder = (order) => {
    validateOrder(order);
    checkInventory(order.items);
    
    const total = calculateTotal(order.items, order.discount);
    
    const paymentResult = processPayment(total);
    if (!paymentResult.success) {
        throw new Error("Payment processing failed.");
    }
    
    sendNotification(order);
    
    const response = processResponseSchema({ ...order, total })
    return response;
};

app.post('/api/v1/orders', (req, res) => {
    try {
        const order = req.body;
        const processedOrder = processOrder(order);
        res.send(processedOrder);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});