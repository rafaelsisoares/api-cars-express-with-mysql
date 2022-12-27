const { Router } = require('express');

const fuelsDB = require('../db/fuelsDB');

const fuelsRouter = Router();

fuelsRouter.get('/', async (_req, res) => {
    try {
        const [result] = await fuelsDB.getAll();
        res.status(200).json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erro ao fazer a busca' });
    }
});

module.exports = fuelsRouter;