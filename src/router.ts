import { Router } from "express";
import { body, param } from "express-validator";
import { createProduct, getProductById, getProducts, updateAvailablebility, updateProduct, deleteProduct } from "./handlers/product";
import { handleInputErrors } from "./middleware";

const router = Router( )

// Routing
router.get('/', getProducts)

router.get('/:id', 
    param('id').isUUID().withMessage('ID no válido'),
    handleInputErrors,
    getProductById )


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


router.put('/:id',
    body('name', 'El nombre del producto es obligatorio')
          .notEmpty(),
  
    body('price')
          .isNumeric().withMessage('El precio debe ser un numero')
          .notEmpty().withMessage('El precio es obligatorio')
          .custom((value) => value > 0).withMessage('El precio debe ser mayor a 0'),
          
    body('available')
          .isBoolean().withMessage('El campo available debe ser un valor booleano'),
    handleInputErrors,     
    updateProduct) 

router.patch('/:id',
     param('id').isUUID().withMessage('ID no válido'),
    handleInputErrors,
    updateAvailablebility)


router.delete('/:id',
    param('id')
  .isInt()
  .withMessage('ID no válido'),
    handleInputErrors,
    deleteProduct)

export default router