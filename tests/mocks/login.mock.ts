import { Login, Token } from '../../src/types/Login'
import { User } from '../../src/types/User'

const hashedPassword = '$2a$10$gwBOeN/fbTCtNQRMp.Rlge8KVqLqiC8uYnXJ6SJOvnGxHxWGGe.Zq'
const validPassword = 'valquíria'

const validLogin: Login = {
  username: 'Helga',
  password: validPassword,
}

const loginWithNoUsername: Login = {
  username: '',
  password: validPassword,
}

const loginWithNoPassword: Login = {
  username: 'Helga',
  password: '',
}

const loginWithInvalidUsername: Login = {
  username: 'invalidUsername',
  password: validPassword,
}

const loginWithInvalidPassword: Login = {
  username: 'Helga',
  password: 'invalidPassword',
}

const existingUser: User = {
  id: 3,
  username: 'Helga',
  vocation: 'Curandeira',
  level: 9,
  password: hashedPassword,
}

const tokenMock: Token = { token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNoZW5hIiwiaWF0IjoxNjI5MjIwNjQ5LCJleHAiOjE2MjkyMjQyNDl9.1'}

export default {
  validLogin,
  loginWithNoUsername,
  loginWithNoPassword,
  loginWithInvalidPassword,
  loginWithInvalidUsername,
  existingUser,
  tokenMock,
}
