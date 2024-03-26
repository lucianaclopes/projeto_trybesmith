import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import loginService from '../../../src/services/login.service';
import loginMock from '../../mocks/login.mock'; 

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Ao não receber um email, retorne um erro', async function () {
    // Arrange
    const { loginWithNoUsername } = loginMock;
    // Act
    const serviceResponse = await loginService.verifyLogin(loginWithNoUsername);
    // Assert
    expect(serviceResponse.status).to.equal('INVALID_DATA');
    expect(serviceResponse.data).to.deep.equal({ message: '"username" and "password" are required'});
  });
  it('Ao não receber uma senha, retorne um erro', async function () {
    // Arrange
    const { loginWithNoPassword } = loginMock;
    // Act
    const serviceResponse = await loginService.verifyLogin(loginWithNoPassword);
    // Assert
    expect(serviceResponse.status).to.equal('INVALID_DATA');
    expect(serviceResponse.data).to.deep.equal({ message: '"username" and "password" are required'});
  });
  it('Ao receber um username inexistente, retorne um erro', async function () {
    //Arrange
    const { loginWithInvalidUsername } = loginMock;
    sinon.stub(UserModel, 'findOne').resolves(null);
    // Act
    const serviceResponse = await loginService.verifyLogin(loginWithInvalidUsername);
    // Assert
    expect(serviceResponse.status).to.equal('UNAUTHORIZED');
    expect(serviceResponse.data).to.deep.equal({ message: 'Username or password invalid'});
  });
  it('Ao receber uma senha inválida, retorne um erro', async function () {
    // Arrange
    const { loginWithInvalidPassword, existingUser } = loginMock;
    const mockFindOne = UserModel.build(existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOne);
    // Act
    const serviceResponse = await loginService.verifyLogin(loginWithInvalidPassword);
    // Assert
    expect(serviceResponse.status).to.equal('UNAUTHORIZED');
    expect(serviceResponse.data).to.deep.equal({ message: 'Username or password invalid'});

  });
  it('Ao receber um login válido, retorne um token', async function () {
    // Arrange
    const { validLogin, existingUser } = loginMock;
    const mockFindOne = UserModel.build(existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOne);
    // Act
    const serviceResponse = await loginService.verifyLogin(validLogin);
    // Assert
    expect(serviceResponse.status).to.equal('SUCCESSFUL');
    expect(serviceResponse.data).to.have.key('token');
  });

});
