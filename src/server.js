require('dotenv').config();

const app = require('./app');
const connection = require('./db/connection');

app.listen(3001, async () => {
    console.log('Server Online');
    const [result] = await connection.execute('SELECT 1');
    if (result) console.log('Server connected to DB');
});