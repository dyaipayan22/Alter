import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import connectDB from './config/connectDatabase.js';
import corsOptions from './config/corsOptions.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use(notFound());
app.use(errorHandler());

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
