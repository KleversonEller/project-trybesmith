import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const router = Router();

const productsController = new ProductController();

router.get('/products', productsController.getAll);
router.post('/products', productsController.create);

export default router;