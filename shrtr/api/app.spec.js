const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
	test('It should response the OPTIONS / method with 204', () => {
		return request(app)
			.options('/')
			.expect(204);
	});

	test('It should response the GET / method with 302', () => {
		return request(app)
			.get('/')
			.expect(302);
	});

	test('It should response the GET /@ method with 200', () => {
		return request(app)
			.get('/@')
			.expect(200)
			.expect('Content-Type', /json/);
	});

	test('It should response the GET /TESTE method with 302', () => {
		return request(app)
			.get('/TESTE')
			.expect(302);
	});

	test('It should response the GET /favicon.png method with 200', () => {
		return request(app)
			.get('/favicon.png')
			.expect(200);
	});

	test('It should response the POST / method with 400', () => {
		return request(app)
			.post('/')
			.send({})
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(400, { message: 'Empty request body' });
	});
});
