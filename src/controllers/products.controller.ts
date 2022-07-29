import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/products.service';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const result = await this.productService.create(req.body);
    return res.status(StatusCodes.CREATED).json(result);
  };
}