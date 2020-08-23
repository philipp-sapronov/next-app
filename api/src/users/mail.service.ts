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

  sendLeadGreetingMessage({
    email,
    name,
  }: {
    email: string;
    name: string;
  }): Promise<SentMessageInfo> {
    console.log(this.configService.get('MAILER_FROM'));
    console.log(this.configService.get('MAILER_TO'));
    console.log(this.configService.get('MAILER_AUTH_USER'));
    console.log(this.configService.get('MAILER_AUTH_PASSWORD'));

    return this.mailerService.sendMail({
      from: this.configService.get('MAILER_FROM'),
      to: email,
      subject: `Dear ${name} ✔`,
      text: 'Hello world?',
      html: '<b>You have been subscribed successfully</b>',
    });
  }

  sendNewApplication(params: {
    email: string;
    name: string;
    phone: string;
    createdAt: Date;
    id: string;
  }): Promise<SentMessageInfo> {
    return this.mailerService.sendMail({
      from: this.configService.get('MAILER_FROM'),
      to: this.configService.get('MAILER_TO'),
      subject: 'New Lead',
      text: 'that text',
      html: `<pre>${JSON.stringify(params, null, 4)}</pre>`,
    });
  }

  sendNewCallOrder(params: { phone: string; createdAt: Date }): Promise<SentMessageInfo> {
    return this.mailerService.sendMail({
      from: this.configService.get('MAILER_FROM'),
      to: this.configService.get('MAILER_TO'),
      subject: 'New Lead',
      text: 'that text',
      html: `<pre>${JSON.stringify(params, null, 4)}</pre>`,
    });
  }
}
