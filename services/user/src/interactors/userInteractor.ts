import { IUserInteractor } from '../interfaces/IUserInteractor';
import { IUserRepository } from '../interfaces/IUserRepository';
import { ValidationError } from '../utils/error/errors';

export class UserInteractor implements IUserInteractor {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async createUser(userData: any) {
    const user = await this.repository.create(userData);
    return user;
  }

  async loginUser(email: string, password: string) {
    const existingUser = await this.repository.findByEmail(email);

    if (existingUser.password !== password) {
      throw new ValidationError('Invalid password');
    }

    return existingUser;
  }

  async logoutUser(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async getUsers() {
    const users = await this.repository.find();
    return users;
  }

  async getUserById(userId: string) {
    const user = await this.repository.findById(userId);
    return user;
  }

  async updateUser(userId: string, userData: any) {
    const updatedUser = await this.repository.update(userId, userData);
    return updatedUser;
  }

  async deleteUser(userId: string) {
    await this.repository.delete(userId);
  }
}
