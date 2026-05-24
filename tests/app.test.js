const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
    
    test('GET / should return welcome message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('DevOps Project API');
    });

    test('GET /health should return healthy', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('healthy');
    });

    test('GET /api/items should return items', async () => {
        const res = await request(app).get('/api/items');
        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
    });
});