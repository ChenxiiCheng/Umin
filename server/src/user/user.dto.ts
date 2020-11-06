import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export abstract class User {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class CreateUserDto extends User {
  @IsString()
  nickname: string;
}

export class UserLoginDto extends User { }

export class UpdateUserInfoDto extends User {
  @IsString()
  nickname: string;
}