import { User, UserInput } from '@/db/schema';

export interface IUserRepository {
  create(data: UserInput): Promise<User>;
  updatePassword(email: string, password: string): Promise<User>;
  delete(id: string): Promise<void>;
  get(id: string): Promise<User>;
}
