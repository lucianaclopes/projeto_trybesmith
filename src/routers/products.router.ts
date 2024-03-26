import { Router } from 'express';
import productsController from '../controllers/products.controller';
import productMiddleware from '../middlewares/product.middleware';

const productsRouter = Router();

productsRouter.post(
  '/', 
  productMiddleware.validateNameMiddleware,
  productMiddleware.validatePriceMiddleware,
  productMiddleware.validateUserExistsMiddleware,
  productsController.createProduct,
);
productsRouter.get('/', productsController.listProducts);

export default productsRouter; 