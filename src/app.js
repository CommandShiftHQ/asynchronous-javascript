const express = require('express');
const { jokesController, randomJokeController, personalJokeController } = require('./controllers');

const app = express();

app.use(express.static('public'));

app.get('/jokes', jokesController);

app.get('/joke/random', randomJokeController);

app.get('/joke/personal/:first/:last', personalJokeController);

module.exports = app;
