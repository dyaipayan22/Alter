import { IAuthRepository } from '@/interface/authRepository.interface';

export class AuthService {
  private _repository: IAuthRepository;
  constructor(repository: IAuthRepository) {
    this._repository = repository;
  }

  async loginUser(input: any) {
    const data = await this._repository.login(input);
  }

  async logoutUser(id: string) {
    await this._repository.logout(id);
  }
}
