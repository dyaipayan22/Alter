import dotenv from 'dotenv';
import app from './app';

dotenv.config({ path: './.env.dev' });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Product Service is listening to ${PORT}`);
});
