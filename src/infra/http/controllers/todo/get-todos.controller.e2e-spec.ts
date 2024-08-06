import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../../app.module';
import * as request from 'supertest';

describe('Get todos (E2E)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  test('[GET] /todos', async () => {
    const httpServer = app.getHttpServer();

    for (let i = 0; i < 2; i++) {
      await request(httpServer).post('/todos').send();
    }

    const getResponse = await request(httpServer).get('/todos');

    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.body.length).toBe(2);
  }, 25000);

  afterAll(async () => await app.close());
});
