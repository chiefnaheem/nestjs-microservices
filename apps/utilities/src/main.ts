import { NestFactory } from '@nestjs/core';
import { UtilitiesModule } from './utilities.module';

async function bootstrap() {
  const app = await NestFactory.create(UtilitiesModule);
  await app.listen(3000);
}
bootstrap();
