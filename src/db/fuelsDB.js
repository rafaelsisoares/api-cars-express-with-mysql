const conn = require('./connection');

const getAll = () => conn.execute('SELECT * FROM fuels');

module.exports = {
    getAll,
};