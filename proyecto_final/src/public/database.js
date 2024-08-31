const mysql = require('mysql2');

// Create a connection to the database
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

// Export the connection for use in other files
module.exports = connection;
