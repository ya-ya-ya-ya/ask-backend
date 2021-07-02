import { SignUpInput } from '../../../auth/dto/input/sign-up.input';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async signUp(dto: SignUpInput): Promise<User> {
    let newUser: User;
    newUser = this.create(dto);
    return await this.save(newUser);
  }
}
