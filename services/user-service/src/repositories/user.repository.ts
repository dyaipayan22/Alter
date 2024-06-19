import { eq } from 'drizzle-orm';
import db from '@/db';
import { User, UserInput, users } from '@/db/schema';
import { IUserRepository } from '@/interface/userRepository.interface';

export class UserRepository implements IUserRepository {
  async create({ name, email, password }: UserInput): Promise<User> {
    const user = await db
      .insert(users)
      .values({ name, email, password })
      .returning();
    return user[0];
  }
  async updatePassword(email: string, password: string): Promise<User> {
    const user = await db
      .update(users)
      .set({ password })
      .where(eq(users.email, email))
      .returning();
    return user[0];
  }
  async delete(id: string): Promise<void> {
    await db.delete(users).where(eq(users.id, id)).returning();
  }

  async get(id: string): Promise<User> {
    const res = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id),
    });
    if (res) {
      return res;
    } else {
      throw new Error('No user found');
    }
  }
}
