const conn = require('./connection');

const insert = (car) => conn.execute(
    'INSERT INTO models (name, brand_id, fuel_id) VALUES (?, ?, ?)',
    [car.name, car.brandId, car.fuelId]
);

const getAll = () => conn.execute('SELECT * FROM models');

const getById = (id) => conn.execute('SELECT * FROM models WHERE id = ?', [id]);

const update = (data, id) => conn.execute(
    `UPDATE models SET name = ?, brand_id = ?, fuel_id = ? WHERE id = ?`,
    [data.name, data.brandId, data.fuelId, id]
);

module.exports = {
    insert,
    getAll,
    getById,
    update,
};