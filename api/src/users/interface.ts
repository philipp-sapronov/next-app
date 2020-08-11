import { UserStatus } from './enums';

export interface IUser {
  _id: string;
  createdAt: Date;
  email: string;
  name: string;
  phone: string;
  status: UserStatus;
  updatedAt: Date;
}
