const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3000; // Set the port for your API

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ttm9oClV',
    database: 'mydb'
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

app.get('/provincia/all', (req, res) => {

    const query = 'SELECT * FROM Provincia';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Error fetching data from the database');
            return;
        }

        
        res.json(results);
    });
});


// Define a route to get data from the database and populate the URL
app.get('/provincia/:idProvincia', (req, res) => {
    // Query to fetch data from the database

    const idProvincia = req.params.idProvincia;

    const query = 'SELECT * FROM Provincia WHERE idProvincia = ?';

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

// Define a route to get data from the database and populate the URL
app.get('/departamento/provincia_asociada/:idProvincia', (req, res) => {

    const idProvincia = req.params.idProvincia;

    // Query to fetch data from the database
    const query = 'SELECT * FROM Departamento WHERE Provincia_idProvincia = ?';

    // Execute the query
    connection.query(query, [idProvincia], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Error fetching data from the database');
            return;
        }

        // Send the fetched data as a JSON response
        res.json(results);
    });
});

app.get('/municipio/departamento_asociado/:idDepartamento', (req, res) => {

    const idDepartamento = req.params.idDepartamento;

    // Query to fetch data from the database
    const query = 'SELECT * FROM Municipio WHERE Departamento_idDepartamento = ?';

    // Execute the query
    connection.query(query, [idDepartamento], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Error fetching data from the database');
            return;
        }

        // Send the fetched data as a JSON response
        res.json(results);
    });
});

app.get('/localidad/municipio_asociado/:idMunicipio', (req, res) => {

    const idMunicipio = req.params.idMunicipio;

    // Query to fetch data from the database
    const query = 'SELECT * FROM Localidad WHERE Municipio_idMunicipio = ?';

    // Execute the query
    connection.query(query, [idMunicipio], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Error fetching data from the database');
            return;
        }

        // Send the fetched data as a JSON response
        res.json(results);
    });
});

app.get('/localidad/:idLocalidad', (req, res) => {

    const idLocalidad = req.params.idLocalidad;

    // Query to fetch data from the database
    const query = 'SELECT * FROM Localidad WHERE idLocalidad = ?';

    // Execute the query
    connection.query(query, [idLocalidad], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Error fetching data from the database');
            return;
        }

        // Send the fetched data as a JSON response
        res.json(results[0]);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
