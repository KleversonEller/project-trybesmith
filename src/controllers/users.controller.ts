import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import Jwt, { SignOptions } from 'jsonwebtoken';
import UserService from '../services/users.service';

const secret = process.env.SECRET || 'chavesegura' as string;

export default class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const result = await this.userService.create(req.body);

    const config: SignOptions = {
      algorithm: 'HS256',
      expiresIn: '1d',
    };

    const token = Jwt.sign({ user: result }, secret, config);

    return res.status(StatusCodes.CREATED).json({ token });
  };
}