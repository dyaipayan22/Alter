import express from 'express';
import dotenv from 'dotenv';
import {
  login,
  refresh,
  logout,
  successGoogleLogin,
  failedGoogleLogin,
} from '../controllers/authController.js';
import passport from 'passport';

const router = express.Router();
dotenv.config();

router.get('/google/login/failed', failedGoogleLogin);

router.get('/google/login/success', successGoogleLogin);

router.get('/google', passport.authenticate('google'));
router.get(
  '/google/callback',
  passport.authenticate('google', {
    session: false,
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: `${process.env.CLIENT_URL}/sign-in`,
  }),
  successGoogleLogin
);

router.route('/').post(login);
router.route('/refresh').get(refresh);
router.route('/logout').post(logout);

export default router;
