import { Field, Int, ObjectType } from '@nestjs/graphql';
import { hashSync } from 'bcrypt';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('user')
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 80 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Field()
  @Column({ length: 100 })
  github_url: string;

  @Field(() => Int)
  @Column({ nullable: true, default: 0 })
  knowledge: number;

  @BeforeInsert()
  encryptPassword() {
    this.password = hashSync(this.password, 12);
  }
}
