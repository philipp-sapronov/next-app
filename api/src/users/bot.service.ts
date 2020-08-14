import { Injectable } from '@nestjs/common';
import { Document } from 'mongoose';
import { IUser } from './interface';
import * as TelegramBot from 'node-telegram-bot-api';
import * as moment from 'moment-timezone';

const GROUP_ID = -365549739;

const template = (params: IUser) => {
  return `
<b>New Application from ${params.name}</b><pre>
Name: ${params.name}
Phone: ${params.phone}
Email: ${params.email}

Date: ${moment.tz(new Date(), 'Europe/Kiev').format('MMMM DD, YYYY HH:mm')}
</pre>
`;
};

type ArticleDocument = Document & IUser;
const TOKEN = '1198886651:AAHok1MxC0rLcgWzupiDjYvTo0rdFWL4mZs';

enum ChatType {
  private = 'private',
  group = 'group',
  supergroup = 'supergroup',
  channel = 'channel',
}

@Injectable()
export class TelegramBotService {
  public bot: TelegramBot;

  private isAllowedChat(chat: TelegramBot.Chat) {
    return chat?.type === ChatType.group;
  }

  constructor() {
    this.bot = new TelegramBot(TOKEN, {
      polling: true,
    });
    this.onStart();
    this.onGroupId();
  }

  private onStart() {
    this.bot.onText(/\/start/, (msg: TelegramBot.Message, arr) => {
      if (!this.isAllowedChat(msg.chat)) return;

      this.bot.sendMessage(GROUP_ID, `You have typed: ${arr?.[0]}`);
    });
  }

  private onGroupId() {
    this.bot.onText(/^setGroupId/, (msg: TelegramBot.Message) => {
      if (!this.isAllowedChat(msg.chat)) return;

      this.bot.sendMessage(msg.chat.id, msg.chat.id.toString());
    });
  }

  async sendMessage(params: IUser) {
    return await this.bot.sendMessage(GROUP_ID, template(params), { parse_mode: 'HTML' });
  }

  async getUpdates() {
    return await this.bot.getUpdates();
  }
}
