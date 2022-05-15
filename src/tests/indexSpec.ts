import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
//  Testing Main End point Response
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    });
    it('gets /api/images?filename=fjord&width=200&height=200', async () => {
        const response = await request.get(
            '/api/images?filename=fjord&width=200&height=200'
        );
        expect(response.status).toBe(200);
    });
});
