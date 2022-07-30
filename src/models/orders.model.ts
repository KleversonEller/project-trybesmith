import { Pool } from 'mysql2/promise';
import Orders from '../interfaces/orders.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Orders[]> {
    const [rows] = await this.connection.execute(
      `SELECT orders.id, orders.userId,
      JSON_ARRAYAGG(product.id) AS productsIds
      FROM Trybesmith.Orders AS orders
      INNER JOIN Trybesmith.Products AS product
      ON orders.id = product.orderId
      GROUP BY orders.id
      ORDER BY orders.userId;`,
    );

    return rows as Orders[];
  }
}