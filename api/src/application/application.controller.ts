import { Controller, Post, Body, UsePipes, BadRequestException } from '@nestjs/common';
import { TelegramBotService } from './services/bot.service';
import { EmailService } from './services/mail.service';
import { ClassValidationPipe } from '../common/pipes/validation.pipe';
import { ApplicationDto } from './dto/application.dto';
import { RequestCalDto } from './dto/request-call.dto';

@Controller()
export class ApplicationController {
  constructor(private mailerService: EmailService, private botService: TelegramBotService) {}

  @Post('new-application')
  @UsePipes(new ClassValidationPipe())
  async create(@Body() data: ApplicationDto): Promise<void> {
    if (!data) throw new BadRequestException();

    try {
      const params = {
        email: data.email,
        name: data.name,
        phone: data.phone,
        language: data.language,
      };

      this.botService.sendApplicationMessage(params);

      // FIXME: wrong order of letters
      const result = await this.mailerService.sendNewApplicationLetter(params);

      if (!result?.messageId) {
        console.log('error email application');
      }

      const result2 = await this.mailerService.sendClientGreetingLetter(params);

      if (!result2?.messageId) {
        console.log('error email user notification');
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  @Post('request-call')
  @UsePipes(new ClassValidationPipe())
  async callOffer(@Body() data: RequestCalDto): Promise<void> {
    if (!data) throw new BadRequestException();

    const params = {
      phone: data.phone,
      createdAt: new Date(),
    };

    try {
      this.botService.sendRequestCallMessage(data);

      const result = await this.mailerService.sendNewRequestCallLetter(params);

      if (!result?.messageId) {
        // FIXME: write error message
        console.log('error');
      }
    } catch (e) {
      throw new Error(e);
    }
  }
}
