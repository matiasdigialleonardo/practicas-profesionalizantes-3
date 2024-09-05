const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const mysql = require('mysql2');

// Initialization
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// settings
app.set('port', process.env.PORT || 3000);

// sockets
require('./sockets')(io);

app.use(express.json());

const users =
[
    {
        username: "a",
        password: "a",
        is_authenticated: false
    },
    {
        username: "b",
        password: "b",
        is_authenticated: false
    },
]

function logUser(username, password)
{
    for (const user of users) {
        if (user.username === username && user.password === password) {
            user.is_authenticated = true;
            console.log(`User ${username} authenticated.`);
            return true;
        }
    }

    return false;
}

function isUserAuthenticated(username)
{
    for (const user of users) {
        if (user.username === username) {
            return user ? user.is_authenticated : false;
        }
    }

    return false;
}


app.post('/user/login', (req, res) => {
    const { nickname, password } = req.body;

    was_user_logged = logUser(nickname, password);

    if (was_user_logged)
    {
        return res.json({ status: 'ok', description: 'User found' });
    }
    else
    {
        res.json({ status: 'error', description: 'Invalid username or password' });
    }
});


// static files
app.use(express.static(path.join((__dirname), 'public')));

// starting the server
server.listen(app.get('port'), () => {
    console.log('Server on port 3000')
})