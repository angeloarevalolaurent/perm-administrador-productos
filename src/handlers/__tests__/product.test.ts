import request from 'supertest'
import server from "../../server";

describe('POST /api/products', () => {
    it('should create a new product', async () => {
        const response = await request(server)
            .post('/api/products')
            .send({
                name: 'Test Product',
                price: 90
            })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('data')

        expect(response.status).not.toBe(400)
        expect(response.body).not.toBe(200)
        expect(response.body).not.toHaveProperty('error')

        })
    })