import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppService } from './service';
import { UsersModule } from '../users/module';
import { MailerModule } from '@nestjs-modules/mailer';

const MONGO_URL = process.env.MONGO_URL;
const MAILER_HOST = process.env.MAILER_HOST;
const MAILER_PORT = process.env.MAILER_PORT;
const MAILER_AUTH_USER = process.env.MAILER_AUTH_USER;
const MAILER_AUTH_PASSWORD = process.env.MAILER_AUTH_PASSWORD;

const Mongoose = MongooseModule.forRoot(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: MAILER_HOST,
        port: Number(MAILER_PORT),
        secure: false,
        auth: {
          user: MAILER_AUTH_USER,
          pass: MAILER_AUTH_PASSWORD,
        },
      },
    }),
    Mongoose,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
