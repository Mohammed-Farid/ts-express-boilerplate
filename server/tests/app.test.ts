import request from 'supertest';
import app from '@server/app';

test('should run application', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
});
