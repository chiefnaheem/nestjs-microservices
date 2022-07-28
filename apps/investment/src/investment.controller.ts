import { Controller, Get } from '@nestjs/common';
import { InvestmentService } from './investment.service';

@Controller()
export class InvestmentController {
  constructor(private readonly investmentService: InvestmentService) {}

  @Get()
  getHello(): string {
    return this.investmentService.getHello();
  }
}
