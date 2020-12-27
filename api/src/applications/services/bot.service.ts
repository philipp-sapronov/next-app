import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as TelegramBot from 'node-telegram-bot-api';
import { EnvVariables } from '../../config';
import { StatusText } from '../enums/status-text.enum';
import { Application } from '../interfaces/application.interface';
import { RequestCall } from '../interfaces/request-call.interface';
import { ChatType } from '../enums/telegram-chat-types';
import { TelegramMessage, CallbackMessage } from '../templates/telegram';

@Injectable()
export class TelegramBotService {
  public readonly bot: TelegramBot;
  private readonly token: string;
  private readonly groupId: string;

  static editTextMessage = (text: string): string => {
    return text.replace(StatusText.active, `${StatusText.inactive}`).replace('🌟', '✅');
  };

  static isAllowedChat(chat: TelegramBot.Chat): boolean {
    return chat?.type === ChatType.group;
  }

  static messageOptions = {
    parse_mode: 'Markdown' as const,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: CallbackMessage.setHasBeenRead.text,
            callback_data: CallbackMessage.setHasBeenRead.data,
          },
        ],
      ],
    },
  };

  constructor(private configService: ConfigService<EnvVariables>) {
    this.groupId = this.configService.get('TELEGRAM_GROUP_ID');
    this.token = this.configService.get('TELEGRAM_TOKEN');

    // TODO: throw error if token or groupId doesn't exist

    this.bot = new TelegramBot(this.token, {
      polling: true,
    });

    this.onStart();
    this.onCallbackQuery();
    this.onGroupId();
  }

  private onStart() {
    this.bot.onText(/\/start/, (msg: TelegramBot.Message) => {
      if (!TelegramBotService.isAllowedChat(msg.chat)) return;

      this.bot.sendMessage(this.groupId, 'I am working 🦊');
    });
  }

  private onCallbackQuery() {
    this.bot.on('callback_query', (query: TelegramBot.CallbackQuery) => {
      if (!query.data) {
        this.bot.answerCallbackQuery({
          show_alert: true,
          text: 'Something went wrong! Please try again',
          callback_query_id: query.id,
        });
      }

      if (query.data === CallbackMessage.setHasBeenRead.data) {
        return this.bot.editMessageText(TelegramBotService.editTextMessage(query.message.text), {
          message_id: query.message.message_id,
          chat_id: query.message.chat.id,
          parse_mode: 'Markdown',
        });
      }
    });
  }

  private onGroupId() {
    this.bot.onText(/^getGroupId/, (msg: TelegramBot.Message) => {
      if (!TelegramBotService.isAllowedChat(msg.chat)) return;

      this.bot.sendMessage(msg.chat.id, msg.chat.id.toString());
    });
  }

  async sendApplicationMessage(params: Application): Promise<TelegramBot.Message> {
    return await this.bot.sendMessage(
      this.groupId,
      TelegramMessage.application(params),
      TelegramBotService.messageOptions,
    );
  }

  async sendRequestCallMessage(params: RequestCall): Promise<TelegramBot.Message> {
    return await this.bot.sendMessage(
      this.groupId,
      TelegramMessage.requestCall(params),
      TelegramBotService.messageOptions,
    );
  }
}
