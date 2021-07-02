import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('question')
export class Question {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 150 })
  title: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  description: string;

  @Field(() => Int)
  @Column({ default: 0, nullable: true })
  view: number;

  @Field(() => Int)
  @Column({ type: 'tinyint' })
  is_visible: number;
}
