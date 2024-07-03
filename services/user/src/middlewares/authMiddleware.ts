import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { AuthorizationError } from '../utils/error/errors';

export interface AuthRequest extends Request {
  user?: JwtPayload;
}

export const authenticateUser = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new Error('Forbidden');
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(
      token,
      process.env.TOKEN_SECRET as Secret,
      async (err, decoded) => {
        if (err) {
          throw new AuthorizationError('Not authorized');
        }

        (req as AuthRequest).user = (decoded as JwtPayload)?.id;
        next();
      }
    );
  } catch (error) {
    next(error);
  }
};
