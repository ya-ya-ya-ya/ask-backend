import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../shared/user/entity/user.repository';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
