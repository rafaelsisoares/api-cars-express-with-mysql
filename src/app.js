const express = require('express');

const brandsRouter = require('./routes/brandsRoutes');
const carsRouter = require('./routes/carsRoutes');

const app = express();

app.use(express.json());
app.use('/brands', brandsRouter);
app.use('/cars', carsRouter);

module.exports = app;