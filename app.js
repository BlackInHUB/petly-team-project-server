const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require("dotenv").config()

const errorHandler = require('./src/helpers/errorHandler');
const routers = require('./src/routes/api');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

app.use('/api/auth', routers.auth);
app.use("/api/news", routers.news);
app.use("/api/friends", routers.friends);
app.use('/api/user', routers.user);
app.use('/api/notices', routers.notices);

app.use(errorHandler);

module.exports = app;