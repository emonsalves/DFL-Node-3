const { Client } = require('pg')
const dbConfig  = require("../config/db.config.js");


const get = async (req, res) => {

    const client = new Client(dbConfig)
    await client.connect()

    const response = await client.query('SELECT * FROM public.clientes ORDER BY cliente_id ASC ')
    const result = response.rows[0]
    console.log("Consulta db")
    console.log(result) // Hello world!

    await client.end()
    res.send("db route")
}

module.exports = { get }