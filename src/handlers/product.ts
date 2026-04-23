import { Request, Response } from "express"

import Product  from "../models/Product.model"

// Obtener productos
export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
              order: [['price', 'DESC']]
        })
        res.json({ data: products })
    } catch (error) {
        console.log(error); 
    }
}


// Obtener producto por id
export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id as string)

        if(!product) {
            return res.status(404).json({ message: 'Producto no encontrado' })
        }

        res.json({ data: product })

    } catch (error) {
        console.log(error); 
    }
}


// Crear producto
export const createProduct = async (req: Request, res: Response) => {

    try {
        const product = await Product.create(req.body)
        res.json({ data: product })
    } catch (error) {
        console.log(error); 
    }
}


// Actualizar producto PUT
export const updateProduct = async (req: Request, res: Response) => {
 
        const { id } = req.params
        const product = await Product.findByPk(id as string)
       
        if(!product) {
            return res.status(404).json({ message: 'Producto no encontrado' })
        }
        await product.update(req.body)
        await product.save()
        res.json({ data: product })
      
    }

// Actualizar disponibilidad PATCH
export const updateAvailablebility = async (req: Request, res: Response) => {

      const { id } = req.params
        const product = await Product.findByPk(id as string)
       
        if(!product) {
            return res.status(404).json({ message: 'Producto no encontrado' })
        }
        
        product.availability = !product.dataValues.availability
        await product.save()
        res.json({ data: product })

}