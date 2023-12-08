import express from 'express';
import dotenv from 'dotenv';
import { login, refresh, logout } from '../controllers/authController.js';
import passport from 'passport';

const router = express.Router();
dotenv.config();

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: process.env.GOOGLE_FAILURE_REDIRECT,
  })
);

router.route('/').post(login);
router.route('/refresh').get(refresh);
router.route('/logout').post(logout);

export default router;
