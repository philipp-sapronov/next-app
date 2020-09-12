import { IsEmail, Length, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @Length(2, 2, { message: 'Invalid langauge' })
  readonly language: 'RU' | 'UK';

  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @Length(2, 100, { message: 'Invalid Name' })
  readonly name: string;

  @IsPhoneNumber('UA', { message: 'Invalid Phone Number' })
  readonly phone: string;
}

export class callOfferDto {
  @IsPhoneNumber('UA', { message: 'Invalid Phone Number' })
  readonly phone: string;
}
