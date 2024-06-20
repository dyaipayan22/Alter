import { NextFunction, Request, Response } from 'express';
import {
  AuthorizationError,
  NotFoundError,
  ValidationError,
} from '../utils/error/errors';
import logger from '../utils/logger';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let reportError = true;
  let status = 500;
  let data = error.message;

  [NotFoundError, ValidationError, AuthorizationError].forEach(
    (typeOfError) => {
      if (error instanceof typeOfError) {
        reportError = false;
        status = error.status;
        data = error.message;
      }
    }
  );

  if (reportError) {
    logger.error(error);
  } else {
    logger.warn(error);
  }

  return res.status(status).json(data);
};
