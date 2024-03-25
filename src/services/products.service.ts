import ProductModel, { ProductInputtableTypes, 
  ProductSequelizeModel } from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Product } from '../types/Product';

async function createProduct(product:ProductInputtableTypes):Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);
  return { status: 'SUCCESS', data: newProduct.dataValues };
}

async function listProducts():Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
}

export default {
  createProduct,
  listProducts,
};