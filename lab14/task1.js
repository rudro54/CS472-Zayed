const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get(['/home', '/'], (req, res) => {
    res.send('Welcome to my website');
});

app.get('/about', (req, res) => {
    const filePath = path.join(__dirname, '..', 'lab13', 'about.txt');
    res.sendFile(filePath);
});

app.get('/image', (req, res) => {
    const filePath = path.join(__dirname, '..', 'lab13', 'some.jpg');
    res.sendFile(filePath);
});

app.get('/pdf', (req, res) => {
    const filePath = path.join(__dirname, '..', 'lab13', 'some.pdf');
    res.sendFile(filePath);
});

app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
