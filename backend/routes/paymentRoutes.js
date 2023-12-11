import express from 'express';
import { stripePayment } from '../controllers/paymentController.js';
import { verifyJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(verifyJWT);
router.post('/create-checkout-session', stripePayment);

export default router;
