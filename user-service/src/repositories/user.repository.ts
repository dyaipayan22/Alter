import { IUserRepository } from '@/interface/userRepository.interface';
import db from '@/db';
import { User, users } from '@/db/schema';

export class UserRepository implements IUserRepository {
  async create(data: Omit<User, 'id'>): Promise<User> {
    const res = await db.insert(users).values(data);
    if (res) {
      return res;
    } else {
      throw new Error('Failed to create');
    }
  }
  async update(data: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
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
