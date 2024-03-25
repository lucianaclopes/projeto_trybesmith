import { expect } from 'chai';
import sinon from 'sinon';
import productsService from '../../../src/services/products.service';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Deve ser possível cadastrar um produto com sucess', async function () {
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

});
