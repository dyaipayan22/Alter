import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import { errorHandler } from './middlewares/errorHandlerMiddleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use(productRoutes);

app.use(errorHandler);

export default app;
