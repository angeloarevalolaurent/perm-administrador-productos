import request from 'supertest'
import server from "../../server";

describe('POST /api/products', () => {
    // Prueba de validación de entrada
    it('should display validation errors for invalid input', async () => {
        const response = await request(server)
            .post('/api/products')
            .send({ })

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('error')

    })
// Prueba de creación exitosa
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