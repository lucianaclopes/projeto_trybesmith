import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHttp from '../utils/mapStatusHttp';

async function verifyLogin(req: Request, res: Response) {
  const ServiceResponse = await loginService.verifyLogin(req.body);
  return res.status(mapStatusHttp(ServiceResponse.status)).json(ServiceResponse.data);
}

export default { verifyLogin };
