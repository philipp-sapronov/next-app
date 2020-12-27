import { Module } from '@nestjs/common';
import { TelegramBotService } from './services/bot.service';
import { EmailService } from './services/mail.service';
import { ApplicationsController } from './applications.controller';


@Module({
  imports: [],
  controllers: [ApplicationsController],
  providers: [EmailService, TelegramBotService],
})
export class ApplicationsModule {}
