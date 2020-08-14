import { TelegramBotService } from './bot.service';
import { CreateUserDto } from './dto';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { IUser } from './interface';
import { UsersService } from './user.service';
import { EmailService } from './mail.service';

@Controller('applications')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private mailerService: EmailService,
    private botService: TelegramBotService,
  ) {}
  @Get()
  async find(): Promise<any> {
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

      const appMailParams = {
        createdAt: user.createdAt,
        email: user.email,
        id: user._id,
        name: user.name,
        phone: user.phone,
      };

      const clientMailParams = {
        email: user.email,
        name: user.name,
      };

      this.botService.sendMessage(user);

      const result = await this.mailerService.sendNewApplication(appMailParams);

      if (!result?.messageId) {
        console.log('EMAIL 1 WAS NOT RECEIVED');
      }

      const result2 = await this.mailerService.sendLeadGreetingMessage(clientMailParams);

      if (!result2?.messageId) {
        console.log('EMAIL 2 WAS NOT RECEIVED');
      }
    } catch (e) {
      throw new Error(e);
    }
  }
}
