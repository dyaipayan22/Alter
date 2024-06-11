import { User } from '@/db/schema';

export interface IUserRepository {
  create(data: Omit<User, 'id'>): Promise<User>;
  update(data: User): Promise<User>;
  delete(id: string): void;
  get(id: string): Promise<User>;
}
