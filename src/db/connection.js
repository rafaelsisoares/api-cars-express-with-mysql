const mysql = require('mysql2');

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_ROOT_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: process.env.MYSQL_WAIT_FOR_CONNECTION,
    connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
    queueLimit: process.env.MYSQL_QUEUE_LIMIT,
});

module.exports = connection;