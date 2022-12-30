const modelDatabase = require('../models/database.js');

const getAll = async (req, res) => {
    const listLike = await modelDatabase.getAll();
    res.status(200).send(listLike);
}

const createNew = async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    if (!titulo || !url || !descripcion ||
        typeof titulo !== 'string' || typeof url !== 'string' || typeof descripcion !== 'string') {
        return res.status(400).json({ message: "Campo vacio o incorrecto" });
    }
    await modelDatabase.createNew(titulo, url, descripcion);
    res.status(200).send();
}

module.exports = { getAll, createNew };