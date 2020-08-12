import { CreateUserDto } from './dto';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { IUser } from './interface';
import { UsersService } from './user.service';
import { EmailService } from './mail.service';

@Controller('applications')
export class UsersController {
  constructor(private usersService: UsersService, private mailerService: EmailService) {}
  @Get()
  async find(): Promise<IUser[]> {
    return this.usersService.findAll();
  }
  //
  @Post('create')
  async create(@Body() data: CreateUserDto /* use validation pipe */): Promise<void> {
    try {
      const user =
        (await this.usersService.findOne({ email: data.email })) ||
        (await this.usersService.create(data));

      if (!user) throw new Error('CANNOT CREATE USER');

      const result = await this.mailerService.sendNewApplication({
        createdAt: user.createdAt,
        email: user.email,
        id: user._id,
        name: user.name,
        phone: user.phone,
      });

      if (!result?.messageId) {
        return console.log('EMAIL 1 WAS NOT RECEIVED');
      }

      const result2 = await this.mailerService.sendLeadGreetingMessage({
        email: user.email,
        name: user.name,
      });

      if (!result2?.messageId) {
        return console.log('EMAIL 2 WAS NOT RECEIVED');
      }
    } catch (e) {
      throw new Error(e);
    }
  }
}
