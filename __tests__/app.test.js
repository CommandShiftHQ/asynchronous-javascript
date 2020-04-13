const request = require('supertest');
const app = require('../src/app');

it('GET / should respond with a welcome message', done => {
  request(app)
    .get('/')
    .then(res => {
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Welcome to my jokes API!');
      done();
    });
});

it('GET /jokes should respond with a jokes message', done => {
  request(app)
    .get('/jokes')
    .then(res => {
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Reached the jokes endpoint');
      done();
    });
});

it('GET /joke/random should respond with a random joke message', done => {
  request(app)
    .get('/joke/random')
    .then(res => {
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Reached the random joke endpoint');
      done();
    });
});

it('GET /joke/random/personal should respond with a personal joke message', done => {
  request(app)
    .get('/joke/personal/manchester/codes')
    .then(res => {
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Reached the personal joke endpoint');
      done();
    });
});
