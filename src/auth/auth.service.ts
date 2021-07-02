import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../shared/user/entity/user.repository';
import { User } from '../shared/user/entity/user.entity';
import { SignUpInput } from './dto/input/sign-up.input';
import { ExistEmailError } from '../shared/exception/apollo-exception.index';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: UserRepository,
  ) {}

  public async signUp(dto: SignUpInput): Promise<User> {
    if (await this.userRepository.findOne({ email: dto.email }))
      throw ExistEmailError;

    return await this.userRepository.signUp(dto);
  }
}
