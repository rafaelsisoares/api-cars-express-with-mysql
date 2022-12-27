const carsDB = require('../../db/carsDB');

module.exports = async (req, res, next) => {
    const { name } = req.body;
    const cars = await carsDB.getAll();
    if (!name) {
        return res.status(400).json({ message: 'O campo nome é obrigatório' });
    }
    if (name.length < 2 || typeof name !== 'string') {
        return res.status(400).json({ message: 'O nome do carro é inválido' });
    }
    if (cars[0].some((c) => c.name === name)) {
        return res.status(400).json({ message: 'Este carro já existe na base de dados' });
    }

    next();
};