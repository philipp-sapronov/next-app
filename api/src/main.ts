import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieParser = require('cookie-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors();
  await app.listen(8080);
}
bootstrap();
