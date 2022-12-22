const { Router } = require('express')

const dbController = require("../controllers/database.js")

const router = Router()

router
    .get("/posts", dbController.getAll)
    .post("/posts", dbController.createNew)

module.exports = router;