import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
//  Testing Main End point Response
describe('Test endpoint responses', (): void => {
    it('gets the api endpoint', async (): Promise<void> => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    });
    it('gets /api/images?filename=fjord&width=200&height=200', async (): Promise<void> => {
        const response = await request.get(
            '/api/images?filename=fjord&width=200&height=200'
        );
        expect(response.status).toBe(200);
    });
});
