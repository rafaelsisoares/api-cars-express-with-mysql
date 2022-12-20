const conn = require('./connection');

const insert = (brand) => conn.execute(
    `INSERT INTO brands (name) VALUES (?)`,
    [brand]
    );

module.exports = {
    insert,
};