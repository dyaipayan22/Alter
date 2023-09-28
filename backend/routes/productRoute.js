import express from 'express';
import {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct,
  createProductReview,
  getFeaturedProducts,
  getTopProducts,
} from '../controllers/productController.js';
import { verifyJWT, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);
router.route('/top').get(getTopProducts);
router.route('/featured').get(getFeaturedProducts);

router.use(verifyJWT);

router.route('/review').post(createProductReview);

router.post('/', createProduct);
router.route('/:id').put(updateProduct).delete(deleteProduct);

export default router;
