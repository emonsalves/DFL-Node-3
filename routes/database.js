const { Router } = require('express')
const { Client } = require('pg')

const router = Router()

router.get("/database", async (req, res) => {

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'emonsalves',
        password: 'sa',
        port: 5432,
    })

    await client.connect()
    const response = await client.query('SELECT * FROM public.clientes ORDER BY cliente_id ASC ')
    // console.log(response);
    const result = response.rows[0]
    console.log("Consulta db")
    console.log(result) // Hello world!
    await client.end()

    res.send("db route")
})

module.exports = router;