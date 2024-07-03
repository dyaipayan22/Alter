import { eq } from 'drizzle-orm';
import database from '../db';
import { InsertUser, users } from '../db/schema';
import { IUserRepository } from '../interfaces/IUserRepository';
import { NotFoundError } from '../utils/error/errors';

export class UserRepository implements IUserRepository {
  async create(userData: InsertUser) {
    const user = await database.insert(users).values(userData).returning();
    return user[0];
  }

  async find() {
    return await database.select().from(users);
  }

  async findById(userId: string) {
    const user = await database.query.users.findFirst({
      where: eq(users.id, userId),
    });

    if (!user) {
      throw new NotFoundError('User not found');
    }
    return user;
  }

  async findByEmail(email: string) {
    const user = await database.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!user) {
      throw new NotFoundError('User not found');
    }
    return user;
  }

  async update(userId: string, userData: any) {
    const updatedUser = await database
      .update(users)
      .set(userData)
      .where(eq(users.id, userId))
      .returning();

    return updatedUser[0];
  }

  async updatePassword(email: string, password: string) {
    const updatedUser = await database
      .update(users)
      .set({ password })
      .where(eq(users.email, email))
      .returning();

    return updatedUser[0];
  }

  async delete(userId: string) {
    await database.delete(users).where(eq(users.id, userId));
  }
}
