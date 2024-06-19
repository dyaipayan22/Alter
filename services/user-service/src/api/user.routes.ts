import express, { Request, Response } from 'express';
import { UserRepository } from '@/repositories/user.repository';
import { UserService } from '@/services/user.service';

const router = express.Router();

const userService = new UserService(new UserRepository());

router.post('/user', async (req: Request, res: Response) => {
  try {
    const response = await userService.createUser(req.body);
    return res.status(201).json(response);
  } catch (error) {
    const err = error as Error;
    return res.status(500).json(err.message);
  }
});

router.get('/user/:id', async (req: Request, res: Response) => {
  try {
    const response = await userService.findUser(req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    const err = error as Error;
    return res.status(500).json(err.message);
  }
});

router.patch('/user', async (req: Request, res: Response) => {
  try {
    const response = await userService.updatePassword(req.body);
    return res.status(200).json(response);
  } catch (error) {
    const err = error as Error;
    res.status(500).json(err.message);
  }
});

export default router;
