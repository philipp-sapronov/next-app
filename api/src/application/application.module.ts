import { Module } from '@nestjs/common';
import { TelegramBotService } from './services/bot.service';
import { EmailService } from './services/mail.service';
import { ApplicationController } from './application.controller';


@Module({
  imports: [],
  controllers: [ApplicationController],
  providers: [EmailService, TelegramBotService],
})
export class ApplicationModule {}
