import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentController } from './investment.controller';
import { InvestmentService } from './investment.service';

describe('InvestmentController', () => {
  let investmentController: InvestmentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentController],
      providers: [InvestmentService],
    }).compile();

    investmentController = app.get<InvestmentController>(InvestmentController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(investmentController.getHello()).toBe('Hello World!');
    });
  });
});
