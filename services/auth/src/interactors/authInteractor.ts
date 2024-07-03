import { IAuthInteractor } from '../interfaces/IAuthInteractor';

export class AuthInteractor implements IAuthInteractor {
  async registerUser(name: string, email: string, password: string) {
    return {};
  }
  async loginUser(email: string, password: string) {
    return {};
  }
  async logoutUser() {
    throw new Error('Method not implemented.');
  }
}
