import { IsEmail, Length, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @Length(2, 100, { message: 'Invalid Name' })
  readonly name: string;

  @IsPhoneNumber('UA', { message: 'Invalid Phone Number' })
  readonly phone: string;
}
