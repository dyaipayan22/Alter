import dotenv from 'dotenv';
import app from './app';
import logger from './utils/logger';
import database from './db';
import { products } from './db/schema';

dotenv.config({ path: './.env.dev' });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  logger.info(`Product Service is listening to ${PORT}`);
});
