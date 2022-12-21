const { Client } = require('pg')
const { pool } = require("../database/db.config.js");

const getAll = async (req, res) => {

    const client = new Client(pool)
    await client.connect()

    const likemeList = await client.query('SELECT * FROM posts ORDER BY id ASC ')
    console.log("Consulta likemeList DB")

    await client.end()
    res.send(likemeList.rows)
}

const createNew = async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    const id = Math.floor(Math.random() * 9999)
    const client = new Client(pool)
    await client.connect()
    const consulta = "INSERT INTO posts values ($1, $2, $3, $4, $5)"
    const values = [id, titulo, url, descripcion, 1]
    await client.query(consulta, values)
    res.status(200).send()
}

module.exports = { getAll, createNew }


//REVISAR QUE ES MEJOR CLIENT O POOL 

//REVISAR LA ESTRUCTURA PARA DIVIDIR CONEXION JUNTO A LOGICA