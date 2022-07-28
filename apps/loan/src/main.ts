import { NestFactory } from '@nestjs/core';
import { LoanModule } from './loan.module';

async function bootstrap() {
  const app = await NestFactory.create(LoanModule);
  await app.listen(3000);
}
bootstrap();
