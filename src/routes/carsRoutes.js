const { Router } = require('express');

const carsDB = require('../db/carsDB');

const carsRouter = Router();

carsRouter.post('/', async (req, res) => {
    try {
        const [result] = await carsDB.insert(req.body);
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erro ao adicionar o carro' });
    }
});

module.exports = carsRouter;