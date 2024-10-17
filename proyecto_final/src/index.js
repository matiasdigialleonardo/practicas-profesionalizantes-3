const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

// sockets
// require('./sockets')(io);

const users =
[
    {
        id: 1,
        username: 'a',
        password: 'a',
    },
    {
        id: 2,
        username: 'b',
        password: 'b',
    },
]

class GameModel {
    constructor() {
        // Initialization
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = socketIO(this.server);
        this.app.use(express.json());

        this.connectedPlayers = [];

        // settings
        this.app.set('port', process.env.PORT || 3000);

        // static files
        this.app.use(express.static(path.join((__dirname), 'public')));

        this.app.post('/login', (req, res) => {
            const { username, password } = req.body;

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                this.connectedPlayers.push({'username': username})
                console.log(this.connectedPlayers);

                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        });

        this.io.on('connection', (socket) => {
                   
            //On receiving the message event, console log the data.
            socket.on('messageEvent', (data) => {
                console.log('Received message:', data.text);
            });
    
        });
    }

    run() {
        this.server.listen(this.app.get('port'), () => {
            console.log('Server on port 3000')
        })
    }
}

let gamemodel = new GameModel();

gamemodel.run();