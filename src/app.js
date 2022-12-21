const express = require('express');

const brandsRouter = require('./routes/brandsRoutes');

const app = express();

app.use(express.json());
app.use('/brands', brandsRouter)


module.exports = app;