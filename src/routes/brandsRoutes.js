const express = require('express');

const brandsDB = require('../db/brandsDB');

const brandsRouter = express.Router();

brandsRouter.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const [[result]] = await brandsDB.insert(name);
        res.status(201).json({ message: `Marca ${name} registrada. ID: ${result.id}` });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erro ao registrar a nova marca' });
    };
});

module.exports = brandsRouter;