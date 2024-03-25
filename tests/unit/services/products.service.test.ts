import { expect } from 'chai';
import sinon from 'sinon';
import productsService from '../../../src/services/products.service';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Deve ser possível cadastrar um produto com sucesso', async function () {
    // Arrange
    const { validProductToAdd, productCreated } = productsMock;
    const mockCreateReturn = ProductModel.build(validProductToAdd);
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

    // Act
    const serviceResponse = await productsService.createProduct(validProductToAdd);

    // Assert
    expect(serviceResponse.status).to.equal('SUCCESS');
    expect(serviceResponse.data).to.deep.equal(productCreated);
  });
it('Deve ser possível listar os produtos com sucesso', async function () {
    // Arrange
    const { productsList } = productsMock;
    sinon.stub(ProductModel, 'findAll').resolves(productsList as any);

    // Act
    const serviceResponse = await productsService.listProducts();

    // Assert
    expect(serviceResponse.status).to.equal('SUCCESSFUL');
    expect(serviceResponse.data).to.deep.equal(productsList);
  });

});
