import { ApplicationStatus, ChatType } from './enums';
import { Injectable } from '@nestjs/common';
import { IUser } from './interface';
import * as TelegramBot from 'node-telegram-bot-api';
import * as moment from 'moment-timezone';
import { ConfigService } from '@nestjs/config';
import { EnvVariables } from '../app/config';

const editTextMessage = (text: string): string => {
  return text
    .replace(ApplicationStatus.active, `${ApplicationStatus.inactive}`)
    .replace('🌟', '✅');
};

const callbackMessages = {
  SET_AS_READ: 'set_message_as_read',
};

const translations = {
  [callbackMessages.SET_AS_READ]: 'Отметить как прочитанное',
};

const templateApplication = (params: IUser): string => {
  return `
🚀  *Заявка*

👩  Name: ${params.name}

☎️  Phone: ${params.phone}

✉️  Email: ${params.email}

🌟  Status: ${ApplicationStatus.active}

📅  ${moment.tz(new Date(), 'Europe/Kiev').format('MMMM DD, YYYY HH:mm')}
`;
};

const templateCallOrder = (params: { phone: string }): string => {
  return `
🚀  *Звонок*

☎️  Phone: ${params.phone}

🌟  Status: ${ApplicationStatus.active}

📅  ${moment.tz(new Date(), 'Europe/Kiev').format('MMMM DD, YYYY HH:mm')}
`;
};

@Injectable()
export class TelegramBotService {
  public bot: TelegramBot;
  private groupId: string;

  private isAllowedChat(chat: TelegramBot.Chat) {
    return chat?.type === ChatType.group;
  }

  constructor(private configService: ConfigService<EnvVariables>) {
    this.groupId = this.configService.get('TELEGRAM_GROUP_ID');

    this.bot = new TelegramBot(this.configService.get('TELEGRAM_TOKEN'), {
      polling: true,
    });

    this.subscribe();
    this.onGroupId();
  }

  private subscribe() {
    this.bot.onText(/\/start/, (msg: TelegramBot.Message) => {
      if (!this.isAllowedChat(msg.chat)) return;

      this.bot.sendMessage(this.groupId, 'I am working 🦊');
    });

    this.bot.on('callback_query', (query: TelegramBot.CallbackQuery) => {
      if (!query.data) {
        this.bot.answerCallbackQuery({
          show_alert: true,
          text: 'Something went wrong! Please try again',
          callback_query_id: query.id,
        });
      }

      if (query.data === callbackMessages.SET_AS_READ) {
        return this.bot.editMessageText(editTextMessage(query.message.text), {
          message_id: query.message.message_id,
          chat_id: query.message.chat.id,
          parse_mode: 'Markdown',
        });
      }
    });
  }

  private onGroupId() {
    this.bot.onText(/^getGroupId/, (msg: TelegramBot.Message) => {
      if (!this.isAllowedChat(msg.chat)) return;

      this.bot.sendMessage(msg.chat.id, msg.chat.id.toString());
    });
  }

  async sendApplication(params: IUser): Promise<TelegramBot.Message> {
    return await this.bot.sendMessage(this.groupId, templateApplication(params), {
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: translations[callbackMessages.SET_AS_READ],
              callback_data: callbackMessages.SET_AS_READ,
            },
          ],
        ],
      },
    });
  }

  async sendCallOrder(params: { phone: string }): Promise<TelegramBot.Message> {
    return await this.bot.sendMessage(this.groupId, templateCallOrder(params), {
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: translations[callbackMessages.SET_AS_READ],
              callback_data: callbackMessages.SET_AS_READ,
            },
          ],
        ],
      },
    });
  }
}
