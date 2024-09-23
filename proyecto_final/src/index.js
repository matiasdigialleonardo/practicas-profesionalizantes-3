const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

// Initialization
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// settings
app.set('port', process.env.PORT || 3000);

// sockets
// require('./sockets')(io);


app.use(express.json());


// static files
app.use(express.static(path.join((__dirname), 'public')));


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'a' && password === 'a') {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});


io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for the messageEvent from the client
    socket.on('messageEvent', (data) => {
        console.log('Received message:', data.text);
        console.log(socket.id);
        // You can now handle the received message as needed
    });
});

// starting the server
server.listen(app.get('port'), () => {
    console.log('Server on port 3000')
})