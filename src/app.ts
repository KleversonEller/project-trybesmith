import express from 'express';
import ProductsRouters from './routers/products.routes';

const app = express();

app.use(express.json());

app.use(ProductsRouters);

export default app;
