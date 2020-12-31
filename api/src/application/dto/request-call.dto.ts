import { IsPhoneNumber } from 'class-validator';

export class RequestCalDto {
  @IsPhoneNumber('UA', { message: 'Invalid Phone Number' })
  readonly phone: string;
}
