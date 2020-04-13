const express = require('express');
const {
  mainController,
  jokesController,
  randomJokeController,
  personalJokeController,
} = require('./controllers');

const app = express();

app.get('/', mainController);

app.get('/jokes', jokesController);

app.get('/joke/random', randomJokeController);

app.get('/joke/personal/:first/:last', personalJokeController);

module.exports = app;
