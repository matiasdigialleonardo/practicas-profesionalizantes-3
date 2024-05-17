const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3000; // Set the port for your API

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ttm9oClV',
    database: 'webcomponents'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));


app.get('/usuarios/all', (req, res) => {

    const query = 'SELECT * FROM usuarios';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Error fetching data from the database');
            return;
        }

        
        res.json(results);
    });
});

app.post('/usuarios/create-user', (req, res) => {

    const { username, saldo } = req.body;
    const sql = 'INSERT INTO usuarios (username, saldo) VALUES (?, ?)';
    const values = [username, saldo];

    connection.query(sql, values, (error, result) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error creating user');
        } else {
          res.status(201).json({ message: 'User created successfully' });
        }
      });

});

app.get('/usuarios/:idUsuario', (req, res) => {
    // Query to fetch data from the database

    const idProvincia = req.params.idUsuario;

    const query = 'SELECT * FROM usuarios WHERE id = ?';

    // Execute the query
    connection.query(query, [idProvincia], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Error fetching data from the database');
            return;
        }

        // Send the fetched data as a JSON response
        res.json(results[0]);
    });
});

app.post('/usuarios/:idUsuario/update', (req, res) => {
    

    const userId = req.params.idUsuario;

    const { username, saldo } = req.body;
    const sql = 'UPDATE usuarios SET username = ?, saldo = ? WHERE id = ?';
    const values = [username, saldo, userId];

    connection.query(sql, values, (error, result) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error updating user');
        } else {
          res.status(201).json({ message: 'User updated successfully' });
        }
      });
});

app.post('/usuarios/:idUsuario/delete', (req, res) => {
    
    const userId = req.params.idUsuario;

    const sql = 'DELETE FROM usuarios WHERE id = ?';
    value = [userId]

    connection.query(sql, value, (error, result) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error deleting user');
        } else {
          res.status(201).json({ message: 'User deleted successfully' });
        }
      });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
