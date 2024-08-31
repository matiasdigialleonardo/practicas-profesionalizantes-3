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

// Database connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'tp2_seminario'
});

// Connect to the database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        process.exit(1); // Exit the application if the connection fails
    }
    console.log('Connected to the database');
});


app.use(express.json());

// Route to handle user creation
app.post('/user/createUser', (req, res) => {
    const { nickname, password } = req.body;

    // SQL query to insert a new user
    const sql = 'INSERT INTO user (nickname, password) VALUES (?, ?)';

    connection.query(sql, [nickname, password], (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ status: 'db-error', description: err.message });
        }

        // Respond with success status
        res.json({ status: 'ok', description: `${nickname} - ${password}` });
    });
});

app.post('/user/login', (req, res) => {
    const { nickname, password } = req.body;

    // SQL query to check if the user exists
    const sql = 'SELECT COUNT(*) AS count FROM user WHERE nickname = ? AND password = ?';

    connection.query(sql, [nickname, password], (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ status: 'db-error', description: err.message });
        }

        const row = results[0];
        if (row.count > 0) {
            res.json({ status: 'ok', description: 'User found' });
        } else {
            res.json({ status: 'error', description: 'Invalid username or password' });
        }
    });
});


// static files
app.use(express.static(path.join((__dirname), 'public')));

// starting the server
server.listen(app.get('port'), () => {
    console.log('Server on port 3000')
})