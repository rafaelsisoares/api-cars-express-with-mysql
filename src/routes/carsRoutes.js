const { Router } = require('express');

const carsDB = require('../db/carsDB');
const checkCarBrand = require('../middlewares/validators/checkCarBrand');
const checkCarFuel = require('../middlewares/validators/checkCarFuel');
const checkCarName = require('../middlewares/validators/checkCarName');

const carsRouter = Router();

carsRouter.post('/', checkCarName, checkCarBrand, checkCarFuel, async (req, res) => {
    try {
        const [result] = await carsDB.insert(req.body);
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erro ao adicionar o carro' });
    }
});

carsRouter.get('/', async (_req, res) => {
    try {
        const [result] = await carsDB.getAll();
        res.status(200).json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erro ao fazer a busca' });
    }
});

carsRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [[result]] = await carsDB.getById(id);
        res.status(result ? 200 : 404).json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erro ao fazer a busca' });
    }
});

carsRouter.put('/:id', checkCarName, checkCarBrand, checkCarFuel, async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await carsDB.update(req.body, id);
        if (result.affectedRows > 0) {
            res.status(200).json({ id, ...req.body });
        } else {
            res.status(404).json({ message: 'Carro não encontrado' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erro ao fazer a atualizacao' });
    }
});

carsRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await carsDB.remove(id);
        if (result.affectedRows > 0) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Carro não encontrado' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erro ao fazer a exclusão' });
    }
});

module.exports = carsRouter;