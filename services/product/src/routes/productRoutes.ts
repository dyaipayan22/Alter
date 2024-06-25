import express from 'express';
import { ProductController } from '../controllers/productController';
import { ProductInteractor } from '../interactors/productInteractor';
import { ProductRepository } from '../repositories/productRepository';
import { validateRequest } from '../middlewares/requestValidationMiddleware';
import { CreateProductSchema } from '../dto/productDto';

const router = express.Router();

const repository = new ProductRepository();
const interactor = new ProductInteractor(repository);
const controller = new ProductController(interactor);

router.get('/', controller.onGetProducts.bind(controller));
router.get('/:productId', controller.onGetProductById.bind(controller));

router.post(
  '/',
  validateRequest({ body: CreateProductSchema }),
  controller.onCreateProduct.bind(controller)
);
router.patch('/:productId', controller.onUpdateProduct.bind(controller));
router.delete('/:productId', controller.onDeleteProduct.bind(controller));

export default router;
