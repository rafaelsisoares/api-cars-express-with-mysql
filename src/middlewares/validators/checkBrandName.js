const brandsDB = require('../../db/brandsDB');

module.exports = async (req, res, next) => {
    const { name } = req.body;
    const brands = await brandsDB.getAllBrands();
    if (!name) {
        return res.status(400).json({ message: 'O campo nome é obrigatório' });
    }
    if (name.length < 3 || typeof name !== 'string') {
        return res.status(400).json({ message: 'O nome inserido é inválido' });
    }
    if (brands[0].some((b) => b.name.toLowerCase() === name.toLowerCase())) {
        return res.status(400).json({ message: 'Essa marca já está registrada' });
    }
    next();
};