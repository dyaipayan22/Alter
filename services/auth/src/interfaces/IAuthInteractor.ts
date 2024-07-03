import { User } from '../db/schema';

export interface IAuthInteractor {
  registerUser(name: string, email: string, password: string): Promise<{}>;
  loginUser(email: string, password: string): Promise<{}>;
  logoutUser(): Promise<void>;
}
