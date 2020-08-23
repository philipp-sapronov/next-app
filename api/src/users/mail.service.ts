import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SentMessageInfo } from 'nodemailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  sendLeadGreetingMessage({
    email,
    name,
  }: {
    email: string;
    name: string;
  }): Promise<SentMessageInfo> {
    return this.mailerService.sendMail({
      from: 'admin@test-env.space',
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
      from: 'admin@test-env.space',
      to: 'ph.soff@gmail.com',
      subject: 'New Lead',
      text: 'that text',
      html: `<pre>${JSON.stringify(params, null, 4)}</pre>`,
    });
  }

  sendNewCallOffer(params: {
    phone: string;
    createdAt: Date;
    id: string;
  }): Promise<SentMessageInfo> {
    return this.mailerService.sendMail({
      from: 'admin@test-env.space',
      to: 'ph.soff@gmail.com',
      subject: 'New Lead',
      text: 'that text',
      html: `<pre>${JSON.stringify(params, null, 4)}</pre>`,
    });
  }
}
