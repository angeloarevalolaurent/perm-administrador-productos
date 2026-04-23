import { Router } from "express";
import { body } from "express-validator";
import { createProduct } from "./handlers/product";
import { handleInputErrors } from "./middleware";

const router = Router( )

// Routing
router.get('/', (req, res)=> {
    res.json('Desde GET')
})
router.post('/', 
  // Validaciones
  body('name', 'El nombre del producto es obligatorio')
          .notEmpty(),
  
    body('price')
          .isNumeric().withMessage('El precio debe ser un numero')
          .notEmpty().withMessage('El precio es obligatorio')
          .custom((value) => value > 0).withMessage('El precio debe ser mayor a 0'),
          
    handleInputErrors,      
    createProduct)


router.put('/', (req, res)=> {
    res.json('Desde PUT')
})

router.patch('/', (req, res)=> {
    res.json('Desde PAHT')
})

router.delete('/', (req, res)=> {
    res.json('Desde DELETE')
})

export default router