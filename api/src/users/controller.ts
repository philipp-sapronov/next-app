import { TelegramBotService } from './bot.service';
import { CreateUserDto, callOfferDto } from './dto';
import { Controller, Post, Body, UsePipes, BadRequestException } from '@nestjs/common';
import { EmailService } from './mail.service';
import { ClassValidationPipe } from '../app/validation.pipe';

@Controller()
export class UsersController {
  constructor(private mailerService: EmailService, private botService: TelegramBotService) {}

  @Post('create')
  @UsePipes(new ClassValidationPipe())
  async create(@Body() data: CreateUserDto): Promise<void> {
    if (!data) throw new BadRequestException();

    try {
      if (!data) throw new BadRequestException();

      const mailParams = {
        email: data.email,
        name: data.name,
        phone: data.phone,
        language: data.language,
      };

      this.botService.sendApplication(mailParams);

      const result = await this.mailerService.sendNewApplication(mailParams);

      if (!result?.messageId) {
        console.log('error email application');
      }

      const result2 = await this.mailerService.sendLeadGreetingMessage(mailParams);

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
