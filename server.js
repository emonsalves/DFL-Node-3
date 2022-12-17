const express = require('express');
const morgan = require('morgan');
// const path = require('path');

const app = express();
// const databaseRoute = require("./routes/database");
// const notFound = require("./routes/notfound");
const routes = require("./routes/index")


// server settings 
app.set('port', 3000);


// middlewares
app.use(morgan('dev'));
app.use(express.json());


// routes
app.use(routes);
// app.use(databaseRoute);
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(notFound);

app.listen(app.get('port'));
console.log(`Server on port ${app.get('port')}`);