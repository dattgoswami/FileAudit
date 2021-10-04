import supertest from 'supertest';
import app from '../../../src/index';

const request = supertest(app);

describe('extensions endpoint response test suite', () => {
  it('should return success status ', async () => {
    const res = await request.get('/api/extensions');
    expect(res.status).toBe(200);
  });
});
