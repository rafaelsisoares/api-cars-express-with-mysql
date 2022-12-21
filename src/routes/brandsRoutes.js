const express = require('express');

const brandsDB = require('../db/brandsDB');

const brandsRouter = express.Router();

brandsRouter.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const [result] = await brandsDB.insert(name);
        res.status(201).json({ message: `Marca ${name} registrada. ID: ${result.insertId}` });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erro ao registrar a nova marca' });
    };
});

brandsRouter.get('/', async (_req, res) => {
    try {
        const [result] = await brandsDB.getAllBrands();
        res.status(200).json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erro ao fazer a busca' });
    }
});

module.exports = brandsRouter;