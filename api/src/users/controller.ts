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

      const mailParams = {
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

      this.botService.sendApplication(user);

      const result = await this.mailerService.sendNewApplication(mailParams);

      if (!result?.messageId) {
        console.log('error email application');
      }

      const result2 = await this.mailerService.sendLeadGreetingMessage(clientMailParams);

      if (!result2?.messageId) {
        console.log('error email user notification');
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  @Post('call-order')
  @UsePipes(new ClassValidationPipe())
  async callOffer(@Body() data: callOfferDto): Promise<void> {
    if (!data) throw new BadRequestException();

    const mailParams = {
      phone: data.phone,
      createdAt: new Date(),
    };

    try {
      this.botService.sendCallOrder(data);

      const result = await this.mailerService.sendNewCallOrder(mailParams);

      if (!result?.messageId) {
        console.log('error email call order');
      }
    } catch (e) {
      throw new Error(e);
    }
  }
}
