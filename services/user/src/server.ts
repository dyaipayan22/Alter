import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

import app from './app';

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Auth Service is listening on Port ${PORT}`)
);
