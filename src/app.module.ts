import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { QuestionModule } from './question/question.module';
import { TypeOrmConfigModule } from './typeorm/typeorm-config.module';

@Module({
  imports: [
    TypeOrmConfigModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    QuestionModule,
  ],
})
export class AppModule {}
