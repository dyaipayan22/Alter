import expressAsyncHandler from 'express-async-handler';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import User from '../models/userModel.js';
import {
  generateAccessToken,
  generateRefreshToken,
} from '../utils/generateToken.js';

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        email: profile.emails[0].value,
      });

      if (existingUser) return done(null, existingUser);

      const newUser = await User.create({
        name: profile.displayName,
        email: profile.emails[0].value,
        image: profile.photos[0].value,
        googleSignup: true,
      });

      accessToken = generateAccessToken(newUser._id, newUser.role);
      refreshToken = generateRefreshToken(newUser._id);

      return done(null, { accessToken, role });
    }
  )
);

//@desc   Login user
//@route  POST /
//@access Public
export const login = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('All fields are required');
  }

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const accessToken = generateAccessToken(user._id, user.role);
    const refreshToken = generateRefreshToken(user._id);

    const role = user.role;

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken, role });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

//@desc   Refresh
//@route  GET /refresh
//@access Public
export const refresh = expressAsyncHandler(async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    res.status(401);
    throw new Error('Unauthorized');
  }

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        res.status(403);
        throw new Error('Forbidden');
      }
      const foundUser = await User.findById(decoded.id);
      if (!foundUser) {
        res.status(401);
        throw new Error('Unauthorized');
      }

      const accessToken = generateAccessToken(foundUser.id);
      res.json({ accessToken });
    }
  );
});

//@desc   Logout
//@route  POST auth/logout
//@access Public
export const logout = expressAsyncHandler(async (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  if (!cookies.jwt) {
    res.status(204);
    throw new Error('No cookie');
  }
  res.clearCookie('jwt', {
    httpOnly: true,
  });
  res.json({ message: 'Cookie cleared' });
});
