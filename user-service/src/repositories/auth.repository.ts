import { IAuthRepository } from '@/interface/authRepository.interface';
import { User } from '@/models/user.model';

export class AuthRepository implements IAuthRepository {
  login(data: any): Promise<User> {
    throw new Error('Method not implemented.');
  }
  logout(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
