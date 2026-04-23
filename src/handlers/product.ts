import { Request, Response } from "express"
import {check, validationResult} from 'express-validator'
import Product  from "../models/Product.model"

export const createProduct = async (req: Request, res: Response) => {

  await check('name', 'El nombre del producto es obligatorio')
        .notEmpty().run(req)

  await check('price')
        .isNumeric().withMessage('El precio debe ser un numero')
        .notEmpty().withMessage('El precio es obligatorio')
        .custom((value) => value > 0).withMessage('El precio debe ser mayor a 0')
        .run(req)
        
  let errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

 const product = await Product.create(req.body)
    res.json({ data: product })
}