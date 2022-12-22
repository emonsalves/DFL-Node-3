const modelDatabase = require('../models/database.js');

const getAll = async (req, res) => {
    const listLike = await modelDatabase.getAll();
    res.status(200).send(listLike);
}

const createNew = async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    await modelDatabase.createNew(titulo, url, descripcion);
    res.status(200).send();
}

module.exports = { getAll, createNew };


//FALTA VALIDAR DATOS RECORDAR FRONT ES MODIFICABLE 