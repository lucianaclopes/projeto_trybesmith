import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsController from '../../../src/controllers/products.controller';
import productsService from '../../../src/services/products.service';
import productsMock from '../../mocks/products.mock';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('Deve ser possível cadastrar um produto com sucesso', async function () {
    // Arrange
    req.body = productsMock.validProductToAdd;
    sinon.stub(productsService, 'createProduct').resolves({
      status: 'SUCCESS',
      data: productsMock.productCreated,
    });
    // Act
    await productsController.createProduct(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productsMock.productCreated);
  });
  it('Deve ser possível listar todos os produtos com sucesso', async function () {
    // Arrange
    sinon.stub(productsService, 'listProducts').resolves({
      status: 'SUCCESSFUL',
      data: productsMock.productsList as any,
    });
    // Act
    await productsController.listProducts(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsMock.productsList);
  });

});
