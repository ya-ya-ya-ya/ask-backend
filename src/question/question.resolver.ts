import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { Question } from './entity/question.entity';
import { QuestionService } from './question.service';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @Query(() => [Question], { name: 'questions', nullable: 'items' })
  public async getQuestions(): Promise<Question[]> {
    return await this.questionService.getQuestions();
  }
}
