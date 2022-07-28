import { NestFactory } from '@nestjs/core';
import { EasypayModule } from './easypay.module';

async function bootstrap() {
  const app = await NestFactory.create(EasypayModule);
  await app.listen(3000);
}
bootstrap();
