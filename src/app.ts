import express from 'express';
import ProductsRouters from './routers/products.routes';
import UsersRouter from './routers/users.routes';

const app = express();

app.use(express.json());

app.use(ProductsRouters);
app.use(UsersRouter);

export default app;
