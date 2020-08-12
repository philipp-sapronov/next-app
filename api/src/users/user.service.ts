import { CreateUserDto } from './dto';
import { UserDbParams } from './schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { IUser } from './interface';
//
type ArticleDocument = Document & IUser;

@Injectable()
export class UsersService {
  constructor(@InjectModel(UserDbParams.name) private readonly userModel: Model<ArticleDocument>) {}
  async findAll(): Promise<IUser[]> {
    return this.userModel.find();
  }

  async findById(id: string): Promise<IUser | null> {
    return this.userModel.findById(id);
  }

  async findOne(params: Partial<IUser>): Promise<IUser | null> {
    return this.userModel.findOne(params);
  }

  async create(data: CreateUserDto): Promise<IUser> {
    const newUser = new this.userModel(data);

    return await newUser.save();
  }
}
