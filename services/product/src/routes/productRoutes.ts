import express from 'express';
import { ProductController } from '@/controllers/productController';
import { ProductInteractor } from '@/interactors/productInteractor';
import { ProductRepository } from '@/repositories/productRepository';

const router = express.Router();

const repository = new ProductRepository();
const interactor = new ProductInteractor(repository);
const controller = new ProductController(interactor);

router.post('/products', controller.onCreateProduct);

export default router;
