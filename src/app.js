const express = require('express');
const { mainController, jokesController } = require('./controllers');

const app = express();

app.get('/', mainController);

app.get('/jokes', jokesController);

module.exports = app;
