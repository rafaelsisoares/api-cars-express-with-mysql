const conn = require('./connection');

const insert = (brand) => conn.execute(
    `INSERT INTO brands (name) VALUES (?)`,
    [brand]
    );

const getAllBrands = () => conn.execute('SELECT * FROM brands');

module.exports = {
    insert,
    getAllBrands,
};