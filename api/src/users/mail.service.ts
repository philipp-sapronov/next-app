import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SentMessageInfo } from 'nodemailer';

const template = (params: MailParams) => `Здравствуйте, ${params.name}! 

Меня зовут Света и я создатель онлайн-школы «In English, please» 🔔

Спасибо за Вашу заявку! 🙌🏻 

В ближайшее время мы с Вами свяжемся по этому номеру ${params.phone}, чтобы выбрать удобное время для пробного занятия 👌🏻

А вот мой номер на тот случай, если у Вас появятся вопросы +38 (066) 008 21 54 

До связи 📱
Отличного дня ☀️
`;

type MailParams = {
  email: string;
  name: string;
  phone: string;
};

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  sendLeadGreetingMessage(params: MailParams): Promise<SentMessageInfo> {
    return this.mailerService.sendMail({
      from: this.configService.get('MAILER_FROM'),
      to: params.email,
      subject: `Заявка`,
      html: template(params),
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
