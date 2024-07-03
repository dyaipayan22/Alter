import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config({ path: './.env.dev' });

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  dbCredentials: {
    url:
      (process.env.DATABASE_URL as string) ||
      'postgresql://postgres:mysecretpassword@localhost:5432/products',
  },
  verbose: true,
  strict: true,
  introspect: {
    casing: 'preserve',
  },
});