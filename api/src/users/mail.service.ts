import {
  emailTemplateGreetingRU,
  emailTemplateGreetingUK,
  emailTemplateApplication,
  emailTemplateCallRequest,
} from './templates';
import { IUser } from './interface';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SentMessageInfo } from 'nodemailer';

const mapLanguageTemplates = {
  RU: emailTemplateGreetingRU,
  UK: emailTemplateGreetingUK,
};

const mapSubjectLanguage = {
  UK: 'Заявка на вводний урок англійського мови',
  RU: 'Заявка на вводный урок английского языка',
};

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  sendLeadGreetingMessage(params: IUser): Promise<SentMessageInfo> {
    const tmpl = mapLanguageTemplates[params.language];
    const subject = mapSubjectLanguage[params.language];

    if (!tmpl) return;

    return this.mailerService.sendMail({
      from: this.configService.get('MAILER_FROM'),
      to: params.email,
      subject,
      text: tmpl(params),
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
