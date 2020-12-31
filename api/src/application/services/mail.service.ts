import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SentMessageInfo } from 'nodemailer';
import { ClientGreetingEmail, SystemEmail } from '../templates/email';
import { Application } from '../interfaces/application.interface';
import { RequestCall } from '../interfaces/request-call.interface';

@Injectable()
export class EmailService {
  outgoingSystemEmailAddress: string;
  incomingSystemEmailAddress: string;

  constructor(private readonly mailerService: MailerService, private configService: ConfigService) {
    this.outgoingSystemEmailAddress = this.configService.get('MAILER_FROM');
    this.incomingSystemEmailAddress = this.configService.get('MAILER_TO');

    // TODO: throw error if email addresses don't exist
  }

  sendClientGreetingLetter(params: Application): Promise<SentMessageInfo> {
    const { template, subject } = ClientGreetingEmail[params.language];

    return this.mailerService.sendMail({
      from: this.outgoingSystemEmailAddress,
      subject: subject,
      text: template(params),
      to: params.email,
    });
  }

  sendNewApplicationLetter(params: Application): Promise<SentMessageInfo> {
    const { template, subject } = SystemEmail.application;
    return this.mailerService.sendMail({
      from: this.outgoingSystemEmailAddress,
      html: template(params),
      subject,
      to: this.incomingSystemEmailAddress,
    });
  }

  sendNewRequestCallLetter(params: RequestCall): Promise<SentMessageInfo> {
    const { template, subject } = SystemEmail.requestCall;

    return this.mailerService.sendMail({
      from: this.outgoingSystemEmailAddress,
      html: template(params),
      subject,
      to: this.incomingSystemEmailAddress,
    });
  }
}
