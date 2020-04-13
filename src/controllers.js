const mainController = (req, res) =>
  res.send({
    message: 'Welcome to my jokes API!',
  });

const jokesController = (req, res) =>
  res.send({
    message: 'Reached the jokes endpoint',
  });

module.exports = {
  mainController,
  jokesController,
};
