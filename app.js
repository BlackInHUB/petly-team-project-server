const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const errorHandler = require('./src/helpers/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

app.use(errorHandler);

module.exports = app;