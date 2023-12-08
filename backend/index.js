import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import passport from 'passport';

import connectDB from './config/connectDatabase.js';
import corsOptions from './config/corsOptions.js';
import credentials from './middlewares/credentials.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(passport.initialize());
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/product', productRoutes);
app.use('/cart', cartRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
