import express from 'express';
import {
  deleteUser,
  getAllUsers,
  getProfile,
  getUserById,
  registerUser,
  updateProfile,
} from '../controllers/userController.js';
import { verifyJWT, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser);

router.use(verifyJWT);

router.route('/profile').get(getProfile).put(updateProfile);

router.use(admin);

router.route('/getAllUsers').get(getAllUsers);
router.route('/:id').delete(deleteUser).get(getUserById);

export default router;
