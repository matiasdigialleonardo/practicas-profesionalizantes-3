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
require('./sockets')(io);


app.use(express.json());


// static files
app.use(express.static(path.join((__dirname), 'public')));

// starting the server
server.listen(app.get('port'), () => {
    console.log('Server on port 3000')
})