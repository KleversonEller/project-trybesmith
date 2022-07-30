import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public getAll = async (req: Request, res: Response) => {
    const result = await this.ordersService.getAll();
    return res.status(StatusCodes.OK).json(result);
  };
}