const request = require('supertest');
const assert = require('assert');
const app = require('../index.js')

describe('GET /', () => {
    it('should return 200 and contain expected text', async () => {
        const response = await request(app).get('/');
        assert.strictEqual(response.statusCode, 200);
        assert.match(response.text, /<h1>Hello World!<\/h1>/);
        assert.match(response.text, /Benvenuto sulla tua pagina Node.js/);
    });
});