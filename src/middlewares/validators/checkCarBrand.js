const brandsDB = require('../../db/brandsDB');

module.exports = async (req, res, next) => {
    const { brandId } = req.body;
    const brands = await brandsDB.getAllBrands();
    if (!brandId) {
        return res.status(400).json({ message: 'O ID da marca é obrigatório' });
    }
    if(!brands[0].some((b) => b.id === brandId) || typeof brandId !== 'number') {
        return res.status(400).json({ message: 'O ID da marca é inválido' });
    }

    next();
};