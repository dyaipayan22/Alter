import {
  pgTable,
  varchar,
  text,
  uuid,
  integer,
  decimal,
} from 'drizzle-orm/pg-core';
import { InferInsertModel, InferSelectModel, relations } from 'drizzle-orm';

export const products = pgTable('product', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name').notNull(),
  description: text('description').notNull(),
  stock: integer('stock').notNull(),
  price: decimal('price').notNull(),
});

export type Product = InferSelectModel<typeof products>;
export type InsertProduct = InferInsertModel<typeof products>;

export const categories = pgTable('category', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name').notNull(),
});

export type Category = InferSelectModel<typeof categories>;
export type InsertCategory = InferInsertModel<typeof categories>;
