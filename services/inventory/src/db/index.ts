import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';
import postgres from 'postgres';

const queryClient = postgres(
  (process.env.DATABASE_URL as string) ||
    'postgresql://postgres:mysecretpassword@localhost:5432/products'
);
const database = drizzle(queryClient, { schema, logger: true });

export default database;
