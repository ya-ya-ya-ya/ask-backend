import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('answer')
export class Answer {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  question_id: number;

  @Field()
  @Column({ type: 'text', nullable: true })
  description: string;

  @Field(() => Int)
  @Column({ type: 'tinyint' })
  is_choice: number;
}
