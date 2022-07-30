import connection from '../models/connection';
import Orders from '../interfaces/orders.interface';
import OrdersModel from '../models/orders.model';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public getAll(): Promise<Orders[]> {
    return this.model.getAll();
  }
}