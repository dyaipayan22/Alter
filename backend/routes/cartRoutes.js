import express from 'express';
import {
  addToCart,
  clearCart,
  getCartItems,
  removeFromCart,
} from '../controllers/cartController.js';
import { verifyJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(verifyJWT);

router.route('/').get(getCartItems);
router.route('/add').post(addToCart);
router.route('/remove').put(removeFromCart);
router.route('/clear').put(clearCart);

export default router;
