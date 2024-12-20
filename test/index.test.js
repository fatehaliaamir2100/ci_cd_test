const request = require('supertest');
const app = require('../index');

test('GET / should return Hello, CI/CD!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, CI/CD!');
    expect(response.statusCode).toBe(200);
});
