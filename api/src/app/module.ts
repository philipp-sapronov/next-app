import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppService } from './service';
import { UsersModule } from '../users/module';
import { MailerModule } from '@nestjs-modules/mailer';

const MONGO_URL = process.env.MONGO_URL;
const Mongoose = MongooseModule.forRoot(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const MAILER_HOST = 'smtp.zoho.eu';
const MAILER_PORT = 587;
const MAILER_AUTH_USER = 'admin@test-env.space';
const MAILER_AUTH_PASSWORD = 'Qwerty12##';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: MAILER_HOST,
        port: MAILER_PORT,
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
