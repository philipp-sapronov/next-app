import {
  emailTemplateGreeting,
  emailTemplateApplication,
  emailTemplateCallRequest,
} from './templates';
import { IUser } from './interface';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SentMessageInfo } from 'nodemailer';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  sendLeadGreetingMessage(params: IUser): Promise<SentMessageInfo> {
    return this.mailerService.sendMail({
      from: this.configService.get('MAILER_FROM'),
      to: params.email,
      subject: `Заявка на вводный урок английского языка`,
      text: emailTemplateGreeting(params),
    });
  }

  sendNewApplication(params: IUser): Promise<SentMessageInfo> {
    return this.mailerService.sendMail({
      from: this.configService.get('MAILER_FROM'),
      to: this.configService.get('MAILER_TO'),
      subject: 'New Application',
      html: emailTemplateApplication(params),
    });
  }

  sendNewCallOrder(params: { phone: string }): Promise<SentMessageInfo> {
    return this.mailerService.sendMail({
      from: this.configService.get('MAILER_FROM'),
      to: this.configService.get('MAILER_TO'),
      subject: 'New Call Request',
      html: emailTemplateCallRequest(params),
    });
  }
}
