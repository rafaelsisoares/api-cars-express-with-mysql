module.exports = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'O campo nome é obrigatório' });
    }
    if (name.length < 3 || typeof name !== 'string') {
        return res.status(400).json({ message: 'O nome inserido é inválido' });
    }

    next();
};