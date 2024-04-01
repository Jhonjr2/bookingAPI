const request = require('supertest')
const app = require('../app')

let id;
let token;

beforeAll(async () => {
    const res = await request(app).post('/users/login').send({
        email: "test@gmail.com", 
        password: "test1234", 
    })
    token = res.body.token
})

test('GET/ images debe retornar todo los images ', async () => {
    const res = await request(app).get('/images').set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});