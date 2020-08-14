import { TelegramBotService } from './bot.service';
import { UserDbParams } from './schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersController } from './controller';
import { UsersService } from './user.service';
import { EmailService } from './mail.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserDbParams.name,
        schema: UserDbParams.schema,
        collection: UserDbParams.collection,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, EmailService, TelegramBotService],
})
export class UsersModule {}
