const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to my jokes API!',
  });
});

module.exports = app;
