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

let usersConnected = [];

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

    if (usersConnected.length < 2)
    {
        usersConnected.push(socket.id);
        console.log(usersConnected);
    }

    for (let user of usersConnected)
    {
        console.log(user);
    }

    // On receiving the message event, console log the data.
    socket.on('messageEvent', (data) => {
        console.log('Received message:', data.text);
        console.log(socket.id);
    });
});

// starting the server
server.listen(app.get('port'), () => {
    console.log('Server on port 3000')
})