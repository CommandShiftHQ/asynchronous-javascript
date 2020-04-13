const mainController = (req, res) =>
  res.send({
    message: 'Welcome to my jokes API!',
  });

module.exports = {
  mainController,
};
