import { TelegramBotService } from './bot.service';
import { CreateUserDto, callOfferDto } from './dto';
import { Controller, Post, Body, Get, UsePipes, BadRequestException } from '@nestjs/common';
import { UsersService } from './user.service';
import { EmailService } from './mail.service';
import { ClassValidationPipe } from '../app/validation.pipe';

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
  @UsePipes(new ClassValidationPipe())
  async create(@Body() data: CreateUserDto): Promise<void> {
    if (!data) throw new BadRequestException();

    try {
      const user = await this.usersService.create(data);

      if (!user) throw new BadRequestException();

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
        console.log('error email 1');
      }

      const result2 = await this.mailerService.sendLeadGreetingMessage(clientMailParams);

      if (!result2?.messageId) {
        console.log('error email 2');
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  @Post('call-offer')
  @UsePipes(new ClassValidationPipe())
  async callOffer(@Body() data: callOfferDto): Promise<void> {
    if (!data) throw new BadRequestException();

    try {
      const user = await this.usersService.create(data);

      if (!user) throw new BadRequestException();

      const appMailParams = {
        createdAt: user.createdAt,
        id: user._id,
        phone: user.phone,
      };

      const clientMailParams = {
        email: user.email,
      };

      this.botService.sendMessage(user);

      const result = await this.mailerService.sendNewCallOffer(appMailParams);

      if (!result?.messageId) {
        console.log('error email 1');
      }

      const result2 = await this.mailerService.sendLeadGreetingMessage(clientMailParams);

      if (!result2?.messageId) {
        console.log('error email 2');
      }
    } catch (e) {
      throw new Error(e);
    }
  }
}
