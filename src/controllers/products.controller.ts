import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapStatusHttp from '../utils/mapStatusHttp';

async function createProduct(req:Request, res:Response) {
  const { name, price, userId } = req.body;
  const serviceResponse = await productsService.createProduct({ name, price, userId });
  return res.status(mapStatusHttp(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  createProduct,
};