const request = require('supertest');
const app = require('../app');

let token;

beforeAll(async () => {
    const res = await request(app).post('/users/login').send({
        email: 'test@gmail.com',
        password: 'test1234'
    });
    token = res.body.token;
})

test('GET /cities', async() => {
    const res = await request(app).get('/cities');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('POST /cities', async() => {
    const body = {
        name: "Bogota",
        country: "Colombia",
        countryId: "CO",
    }
    const res = await request(app)
       .post('/cities')
       .send(body)
       .set('Authorization', `Bearer ${token}`)
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(body.name);
})

test('DELETE /cities/:id', async() => {
    const res = await request(app)
      .delete(`/cities/${id}`)
      .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204)
})