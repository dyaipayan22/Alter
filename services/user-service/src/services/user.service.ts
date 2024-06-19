import { UserInput } from '@/db/schema';
import { IUserRepository } from '@/interface/userRepository.interface';

export class UserService {
  private _repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this._repository = repository;
  }

  async createUser(input: UserInput) {
    const user = await this._repository.create(input);
    if (!user) throw new Error('Failed to create user');
    return user;
  }

  async updatePassword(email: string, password: string) {
    const updatedUser = await this._repository.updatePassword(email, password);
    if (!updatedUser) throw new Error('Failed to update password');
    return updatedUser;
  }

  async findUser(id: string) {}

  async deleteUser(id: string) {}
}
