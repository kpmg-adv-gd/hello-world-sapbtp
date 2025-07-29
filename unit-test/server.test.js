const request = require('supertest');
const app = require('../index.js'); // percorso al file server.js

describe('GET /', () => {
    it('should return 200 and contain expected text', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('<h1>Hello World!</h1>');
        expect(response.text).toContain('Benvenuto sulla tua pagina Node.js');
    });
});