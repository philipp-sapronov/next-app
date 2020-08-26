import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppService } from './service';
import { UsersModule } from '../users/module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';
import vars, { EnvVariables } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      envFilePath: path.join(__dirname, '..', '..', '..', '.env'),
      load: [vars],
      isGlobal: true,
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: async (configService: ConfigService<EnvVariables>) => ({
        transport: {
          host: configService.get('MAILER_HOST'),
          port: configService.get('MAILER_PORT'),
          secure: false,
          auth: {
            user: configService.get('MAILER_AUTH_USER'),
            pass: configService.get('MAILER_AUTH_PASSWORD'),
          },
        },
      }),
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
