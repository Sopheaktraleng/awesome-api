import { IsEmail, IsInt, IsNotEmpty } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  fullname: string;

  @IsInt()
  age: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  grade: string;
}
