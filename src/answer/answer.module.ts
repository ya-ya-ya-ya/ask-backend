import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerRepository } from './entity/answer.repository';
import { AnswerResolver } from './answer.resolver';
import { AnswerService } from './answer.service';

@Module({
  imports: [TypeOrmModule.forFeature([AnswerRepository])],
  providers: [AnswerResolver, AnswerService],
})
export class AnswerModule {}
