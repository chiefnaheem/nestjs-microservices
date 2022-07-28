import { NestFactory } from '@nestjs/core';
import { InvestmentModule } from './investment.module';

async function bootstrap() {
  const app = await NestFactory.create(InvestmentModule);
  await app.listen(3000);
}
bootstrap();
