const conn = require('./connection');

const insert = (brand) => conn.execute(
    `INSERT INTO brands (name) VALUES (?)`,
    [brand]
    );

const getAllBrands = () => conn.execute('SELECT * FROM brands');

const getBrandById = (id) => conn.execute('SELECT * FROM brands WHERE id = ?', [id]);

module.exports = {
    insert,
    getAllBrands,
    getBrandById,
};