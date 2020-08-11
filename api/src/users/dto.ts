import { UserStatus } from './enums';
export class CreateUserDto {
  categories: Array<string>;
  content: string;
  slug: string;
  status: UserStatus;
  summery: string;
  tags: Array<string>;
  title: string;
}
