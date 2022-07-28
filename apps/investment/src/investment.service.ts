import { Injectable } from '@nestjs/common';

@Injectable()
export class InvestmentService {
  getHello(): string {
    return 'Hello World!';
  }
}
