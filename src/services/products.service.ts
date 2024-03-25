import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Product } from '../types/Product';

async function createProduct(product:ProductInputtableTypes):Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);
  return { status: 'SUCCESS', data: newProduct.dataValues };
}

export default {
  createProduct,
};