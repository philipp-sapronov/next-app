import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppService } from './service';
import { UsersModule } from '../users/module';
import { MailerModule } from '@nestjs-modules/mailer';

const Mailer = MailerModule.forRoot({
  transport: {
    host: 'smtp.example.com',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: 'username',
      pass: 'password',
    },
  },
  defaults: {
    from: '"nest-modules" <modules@nestjs.com>',
  },
  // template: {
  //   dir: process.cwd() + '/templates/',
  //   adapter: new HandlebarsAdapter(), // or new PugAdapter()
  //   options: {
  //     strict: true,
  //   },
  // },
});

const Mongoose = MongooseModule.forRoot(
  'mongodb+srv://phl:Qwerty@first.9tyc5.mongodb.net/first?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

@Module({
  imports: [Mailer, Mongoose, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
