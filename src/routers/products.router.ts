import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.post('/', productsController.createProduct);

export default productsRouter; 