import express from 'express';
import {
  createOrder,
  getOrderById,
  updatePaymentStatus,
} from '../controllers/orderController.js';
import { verifyJWT, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(verifyJWT);
router.post('/create', createOrder);
router.get('/:id', getOrderById);
router.put('/:id/updatePayment', updatePaymentStatus);

export default router;
