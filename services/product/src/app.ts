import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import { errorHandler } from './middlewares/errorHandlerMiddleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/products', productRoutes);

app.use('/', (_req: Request, res: Response, _next: NextFunction) => {
  return res.status(200).json({ message: 'Healthy' });
});
app.use(errorHandler);

export default app;
