import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, IsUrl } from 'class-validator';

@InputType()
export class SignUpInput {
  @Field()
  @IsString()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  password: string;

  @Field()
  @IsString()
  @IsUrl()
  github_url: string;
}
