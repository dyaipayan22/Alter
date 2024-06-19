import { ProductController } from '@/controllers/productController';
import express from 'express';

const router = express.Router();

const controller = new ProductController();
router.post('/products');

export default router;
