import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

(async function () {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8080;
  await app.listen(port);
  console.log('Server is listening on port ' + port);
})();
