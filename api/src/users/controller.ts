import { CreateUserDto } from './dto';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { IUser } from './interface';
import { UsersService } from './service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  async find(): Promise<IUser[]> {
    return this.usersService.findAll();
  }
  //
  @Post()
  async create(@Body() data: CreateUserDto /* use validation pipe */): Promise<IUser> {
    console.log(data);

    return this.usersService.create(data);
  }
}
