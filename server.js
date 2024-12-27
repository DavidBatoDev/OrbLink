const express = require('express');
const app = express();
const port = 3000;  // You can change the port if needed

// Middleware to handle incoming JSON data
app.use(express.json());

// Route to handle GET request from ESP32 to turn on the LED
app.get('/led/on', (req, res) => {
    console.log('LED Turned ON');
    res.send({ status: 'LED is ON' });
});

// Route to handle GET request from ESP32 to turn off the LED
app.get('/led/off', (req, res) => {
    console.log('LED Turned OFF');
    res.send({ status: 'LED is OFF' });
});

// Default route to check if the server is running
app.get('/', (req, res) => {
    res.send('ESP32 Web Server is running');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
