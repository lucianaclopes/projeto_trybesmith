import { Request, Response } from 'express';
import usersService from '../services/users.service';
import mapStatusHttp from '../utils/mapStatusHttp';

async function listAllUsersAndProducts(_req:Request, res:Response) {
  const serviceResponse = await usersService.listAllUsersAndProducts();
  return res.status(mapStatusHttp(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  listAllUsersAndProducts,
};