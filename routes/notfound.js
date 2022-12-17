const { Router } = require('express')


const router = Router()

router.use((req, res) => res.status(404).send('<h1>Not Found</h1>')
)

module.exports = router;


