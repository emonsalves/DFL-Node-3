const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const morganBody = require('morgan-body')

const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./routes/index")

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
morganBody(app);

// routes
app.use(routes);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
        throw error
    }
    console.log(`Server on port ${PORT}`)
});