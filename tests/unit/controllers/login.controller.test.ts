import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginService from '../../../src/services/login.service';
import loginController from '../../../src/controllers/login.controller'; 
import loginMock from '../../mocks/login.mock';
import { Token } from '../../../src/types/Login';
import { ServiceResponse } from '../../../src/types/ServiceResponse';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
it('Ao não receber um email, deve retornar status 400', async function () {
  // Arrange
  req.body = loginMock.loginWithNoUsername;
  const serviceResponse: ServiceResponse<Token> = {
    status:'INVALID_DATA',
    data: {message: '"username" and "password" are required'}
  };
  sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);
  // Act
  await loginController.verifyLogin(req, res);
  // Assert
  expect(res.status).to.have.been.calledWith(400);
  expect(res.json).to.have.been.calledWith({ message: '"username" and "password" are required' });  
  
});
it('Ao não receber uma senha, deve retornar status 400', async function () {
  // Arrange
  req.body = loginMock.loginWithNoPassword;
  const serviceResponse: ServiceResponse<Token> = {
    status:'INVALID_DATA',
    data: {message: '"username" and "password" are required'}
  };
  sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);
  // Act
  await loginController.verifyLogin(req, res);
  // Assert
  expect(res.status).to.have.been.calledWith(400);
  expect(res.json).to.have.been.calledWith({ message: '"username" and "password" are required' });  
});
it('Ao receber um username inválido, retorne um status 401', async function () {
  // Arrange
  req.body = loginMock.loginWithInvalidUsername;
  sinon.stub(loginService, 'verifyLogin').resolves({ status: 'UNAUTHORIZED', 
  data: { message: 'Username or password invalid' } });
  // Act
  await loginController.verifyLogin(req, res);
  // Assert
  expect(res.status).to.have.been.calledWith(401);
  expect(res.json).to.have.been.calledWith({ message: 'Username or password invalid' });
});
it('Ao receber uma senha inválida, retorne um status 401', async function () {
  // Arrange
  req.body = loginMock.loginWithInvalidPassword;
  const serviceResponse: ServiceResponse<Token> = {
    status:'UNAUTHORIZED',
    data: {message: 'Username or password invalid'}
  };
  sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);
  // Act
  await loginController.verifyLogin(req, res);
  // Assert
  expect(res.status).to.have.been.calledWith(401);
  expect(res.json).to.have.been.calledWith({ message: 'Username or password invalid' });
});
it('Ao receber um login válido, retorne um status 200', async function () {
  // Arrange
  req.body = loginMock.validLogin;
  const token = { token: 'm1nh4s3nh4$up3r$3cr3t4' };
  const serviceResponse: ServiceResponse<Token> = {
    status:'SUCCESSFUL',
    data: token
  };
  sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);
  // Act
  await loginController.verifyLogin(req, res);
  // Assert
  expect(res.status).to.have.been.calledWith(200);
  expect(res.json).to.have.been.calledWith(token);
});
});
