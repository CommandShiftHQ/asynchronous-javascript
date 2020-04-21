/**
 * @jest-environment node
 */

const request = require('supertest');
const nock = require('nock');
const app = require('../src/app');
const { mockListOfJokes, mockRandomJoke, mockPersonalJoke } = require('../data/test-data');

describe('GET / - Homepage', () => {
  it('should respond with some homepage markup', async () => {
    request(app)
      .get('/')
      .then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Hello, Welcome to My jokes API');
      });
  });
});

describe('GET /jokes', () => {
  it('should respond with a list of jokes', async () => {
    nock('https://api.icndb.com')
      .get('/jokes')
      .reply(200, mockListOfJokes);

    request(app)
      .get('/jokes')
      .then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.jokes).toEqual(mockListOfJokes.value);
      });
  });

  it('should respond with an error message if something goes wrong', async () => {
    nock('https://api.icndb.com')
      .get('/jokes')
      .replyWithError({ statusCode: 500, message: 'huge error' });

    request(app)
      .get('/jokes')
      .then(res => {
        expect(res.statusCode).toEqual(500);
        expect(res.body.error).toEqual('huge error');
      });
  });
});

describe('GET /joke/random', () => {
  it('should respond with a random joke', async () => {
    nock('https://api.icndb.com')
      .get('/jokes/random')
      .query({ exclude: '[explicit]' })
      .reply(200, mockRandomJoke);

    request(app)
      .get('/joke/random')
      .then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.randomJoke).toEqual(mockRandomJoke.value);
      });
  });

  it('should respond with an error message if something goes wrong', async () => {
    nock('https://api.icndb.com')
      .get('/jokes/random')
      .query({ exclude: '[explicit]' })
      .replyWithError({ statusCode: 404, message: 'Unknown resource' });

    request(app)
      .get('/joke/random')
      .then(res => {
        expect(res.statusCode).toEqual(404);
        expect(res.body.error).toEqual('Unknown resource');
      });
  });
});

describe('GET /joke/random/personal', () => {
  it('should respond with a personal joke', async () => {
    nock('https://api.icndb.com')
      .get('/jokes/random')
      .query({ exclude: '[explicit]', firstName: 'manchester', lastName: 'codes' })
      .reply(200, mockPersonalJoke);

    request(app)
      .get('/joke/personal/manchester/codes')
      .then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.personalJoke).toEqual(mockPersonalJoke.value);
      });
  });

  it('should respond with an error if something goes wrong', async () => {
    nock('https://api.icndb.com')
      .get('/jokes/random')
      .query({ exclude: '[explicit]', firstName: 'manchester', lastName: 'codes' })
      .replyWithError({ statusCode: 500, message: 'Bad request' });

    request(app)
      .get('/joke/personal/manchester/codes')
      .then(res => {
        expect(res.statusCode).toEqual(500);
        expect(res.body.error).toEqual('Bad request');
      });
  });
});
