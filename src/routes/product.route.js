import { Router } from "express";
import {
  createProduct,
  getAllProduct,
  getProductById,
  updatePrduct,
  deleteProduct
} from "../controller/product.controller.js"

const productRoutes = Router()

productRoutes.post('/',createProduct);
productRoutes.get('/',getAllProduct);
productRoutes.get('/:id', getProductById);
productRoutes.put('/:id', updatePrduct);
productRoutes.delete('/:id', deleteProduct);

export default productRoutes;