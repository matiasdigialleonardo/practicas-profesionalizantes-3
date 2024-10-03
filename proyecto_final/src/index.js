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

const users =
[
    {
        id: 1,
        username: "a",
        password: "a",
    },
    {
        id: 2,
        username: "b",
        password: "b",
    },
]

let usersConnected = [];

app.use(express.json());


// static files
app.use(express.static(path.join((__dirname), 'public')));


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});


io.on('connection', (socket) => {

    if (usersConnected.length < 2)
    {
        usersConnected.push(
            {   
                "socket_id": socket.id,
                "status": false,
            });
        console.log(usersConnected);
    }

    for (let user of usersConnected)
    {
        console.log("User socket id:" + user.socket_id);
    }

    //On receiving the message event, console log the data.
    socket.on('messageEvent', (data) => {
        console.log('Received message:', data.text);
        // console.log(usersConnected);
    });

    socket.on('playerReady', () => {
        // Check if user is inside usersConnected 
        const user = usersConnected.find(user => user.socket_id === socket.id);
    
        if (user) {
            console.log("Player ready");

            user.status = true;

        } else {
            console.log("User not found");
        }
    });
});

// starting the server
server.listen(app.get('port'), () => {
    console.log('Server on port 3000')
})