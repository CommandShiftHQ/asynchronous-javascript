const express = require('express');
const { mainController, jokesController, randomJokeController } = require('./controllers');

const app = express();

app.get('/', mainController);

app.get('/jokes', jokesController);

app.get('/joke/random', randomJokeController);

module.exports = app;
