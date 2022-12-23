const databaseService = require('../services/database');

const getAll = async () => {
    const consulta = "SELECT * FROM posts ORDER BY id ASC";
    const likemeList = await databaseService.query(consulta);
    return likemeList.rows;
}

const createNew = async (titulo, url, descripcion) => {
    const id = Math.floor(Math.random() * 9999);
    const consulta = "INSERT INTO posts values ($1, $2, $3, $4, $5)";
    const values = [id, titulo, url, descripcion, 1];
    await databaseService.query(consulta, values);
}

module.exports = { getAll, createNew };
