import { TelegramBotService } from './bot.service';
import { Module } from '@nestjs/common';
import { UsersController } from './controller';
import { EmailService } from './mail.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [EmailService, TelegramBotService],
})
export class UsersModule {}
