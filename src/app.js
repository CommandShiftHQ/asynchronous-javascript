const express = require('express');
const { mainController } = require('./controllers');

const app = express();

app.get('/', mainController);

module.exports = app;
