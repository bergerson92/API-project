import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('API Endpoints', () => {
    it('GET /api should return status 200', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    });

    it('GET / api / test should return 200', async () => {
        const response = await request.get('/api/test');
        expect(response.status).toBe(404);
    });

    it('GET /api/images should return status 200', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
    });

    it('GET /api/images with parameters should return status 200', async () => {
        const response = await request.get('/api/images?filename=fjord&width=200&height=200');
        expect(response.status).toBe(200);
    });

    it('GET /nonexistent-endpoint should return status 404', async () => {
        const response = await request.get('/nonexistent-endpoint');
        expect(response.status).toBe(404);
    });
});