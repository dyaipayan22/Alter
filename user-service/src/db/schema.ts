import { pgTable, varchar, text, uuid, boolean } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').notNull().unique(),
  password: varchar('password').notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
  address: many(address),
}));

export const address = pgTable('address', {
  id: uuid('id').defaultRandom().primaryKey(),
  street: text('street'),
  city: varchar('city'),
  state: varchar('state'),
  country: varchar('country'),
  zipCode: varchar('zip_code', { length: 6 }),
  isPrimary: boolean('is_primary').default(false),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),
});

export const addressRelations = relations(address, ({ one }) => ({
  user: one(users, {
    fields: [address.userId],
    references: [users.id],
  }),
}));

export const schema = 4;

export type User = typeof users.$inferSelect;
export type Address = typeof address.$inferSelect;
