import request from 'supertest'
import server from "../../server";
// Pruebas para el endpoint POST /api/products
describe('POST /api/products', () => {
    // Prueba de validación de entrada
    it('should display validation errors for invalid input', async () => {
        const response = await request(server)
            .post('/api/products')
            .send({ })

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')

    })


    it('should validate that the price is greater than 0', async () => {
        const response = await request(server)
            .post('/api/products')
            .send({ 
                name: 'Audifonos',
                price: -10
             })
          

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')

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


    
 

// Pruebas para el endpoint GET /api/products
describe('GET /api/products', () => {

    //  Prueba de respuesta JSON
    it('GET a JSON response with a producta', async () => {
        const response = await request(server)
            .get('/api/products')

        expect(response.status).toBe(404)
    })




    it('GET a JSON response with a producta', async () => {
        const response = await request(server)
            .get('/api/products')
        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toHaveProperty('data')

        expect(response.body.data).toHaveLength(1)
        expect(response.status).not.toBe(404)
        expect(response.body).not.toHaveProperty('error')
    })
})