const express = require('express');
const path = require('path');
const port = 3001
const gAuth=require('./googleAuth')

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath);
})
// google auth reirectrion url
app.post('/auth/google', gAuth.gAuth)

const server = app.listen(port, () => {
    console.log(`Server Started at ${port}`);
});