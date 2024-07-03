import { User } from '../db/schema';

export interface IUserRepository {
  create(userData: any): Promise<User>;
  find(): Promise<User[]>;
  findById(userId: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  update(userId: string, userData: string): Promise<User>;
  updatePassword(email: string, password: string): Promise<User>;
  delete(userId: string): Promise<void>;
}
