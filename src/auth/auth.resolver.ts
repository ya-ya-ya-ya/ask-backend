import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../shared/user/entity/user.entity';
import { AuthService } from './auth.service';
import { SignUpInput } from './dto/input/sign-up.input';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  public async signUp(
    @Args('signUpData') signUpData: SignUpInput,
  ): Promise<User> {
    return await this.authService.signUp(signUpData);
  }
}
