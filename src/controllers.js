const mainController = (req, res) =>
  res.send({
    message: 'Welcome to my jokes API!',
  });

const jokesController = (req, res) =>
  res.send({
    message: 'Reached the jokes endpoint',
  });

const randomJokeController = (req, res) =>
  res.send({
    message: 'Reached the random joke endpoint',
  });

module.exports = {
  mainController,
  jokesController,
  randomJokeController,
};
