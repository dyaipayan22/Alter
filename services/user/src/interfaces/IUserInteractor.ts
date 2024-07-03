import { InsertUser, User } from '../db/schema';

export interface IUserInteractor {
  createUser(userData: InsertUser): Promise<User>;
  loginUser(email: string, password: string): Promise<User>;
  logoutUser(): Promise<void>;
  getUsers(): Promise<User[]>;
  getUserById(userId: string): Promise<User>;
  updateUser(userId: string, userData: any): Promise<User>;
  deleteUser(userId: string): Promise<void>;
}
