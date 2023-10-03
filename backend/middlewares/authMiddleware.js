import jwt from 'jsonwebtoken';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

export const verifyJWT = expressAsyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader?.startsWith('Bearer')) {
    try {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = await User.findById(decoded.UserInfo.id);
      req.role = decoded.UserInfo.role;
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized');
  }
});

export const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
};
