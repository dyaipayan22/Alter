import express from 'express';
import {
  createOrder,
  getOrderById,
  updateOrder,
} from '../controllers/orderController.js';
import { verifyJWT, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(verifyJWT);
router.post('/create', createOrder);
router.get('/:id', getOrderById);

export default router;
