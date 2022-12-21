const conn = require('./connection');

const insert = (car) => conn.execute(
    'INSERT INTO models (name, brand_id, fuel_id) VALUES (?, ?, ?)',
    [car.name, car.brand_id, car.fuel_id]
);

const getAll = () => conn.execute('SELECT * FROM models');

module.exports = {
    insert,
    getAll,
};