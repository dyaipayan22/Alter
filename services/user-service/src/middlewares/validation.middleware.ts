import RequestValidators from '@/interface/request.validators';
import { Request, Response, NextFunction } from 'express';
import * as z from 'zod';

export function validateRequest(validators: RequestValidators) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (validators.body) {
        req.body = await validators.body.parseAsync(req.body);
      }
      if (validators.params) {
        req.params = await validators.params.parseAsync(req.params);
      }
      if (validators.query) {
        req.query = await validators.query.parseAsync(req.query);
      }
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(422);
      }
      next(error);
    }
  };
}
