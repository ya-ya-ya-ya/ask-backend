import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './entity/question.entity';
import { QuestionRepository } from './entity/question.repository';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: QuestionRepository,
  ) {}

  public async getQuestions(): Promise<Question[]> {
    return await this.questionRepository.find();
  }
}
