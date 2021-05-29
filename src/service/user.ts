import { forbiddenUserException } from "../exception";
import { User, UserRepository } from "../interface";

export class UserService {
  constructor(
    private userRepository: UserRepository
  ) {}

  public async checkAdminUser(user: User): Promise<void> {
    if(!user.is_admin) {
      throw forbiddenUserException;
    }
  }
}