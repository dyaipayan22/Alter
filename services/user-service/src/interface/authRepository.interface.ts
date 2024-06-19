import { User } from '@/models/user.model';

export interface IAuthRepository {
  login(data: any): Promise<User>;
  logout(id: string): Promise<void>;
}
