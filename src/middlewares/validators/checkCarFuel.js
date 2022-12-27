const fuelsDB = require('../../db/fuelsDB');

module.exports = async (req, res, next) => {
    const { fuelId } = req.body;
    const fuels = await fuelsDB.getAll();
    if (!fuelId) {
        return res.status(400).json({ message: 'O ID do combustível é obrigatório' });
    }
    if(!fuels[0].some((f) => f.id === fuelId) || typeof fuelId !== 'number') {
        return res.status(400).json({ message: 'O ID do combustível é inválido' });
    }

    next();
};