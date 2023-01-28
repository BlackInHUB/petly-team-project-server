const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require("dotenv").config()

const errorHandler = require('./src/helpers/errorHandler');
const {authRouter} = require('./src/routes/api/authRouter');

const newsRouter = require("./src/routes/api/news")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

app.use('/api/auth', authRouter);
app.use("/api/news", newsRouter);

app.use(errorHandler);

module.exports = app;