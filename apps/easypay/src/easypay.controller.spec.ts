import { Test, TestingModule } from '@nestjs/testing';
import { EasypayController } from './easypay.controller';
import { EasypayService } from './easypay.service';

describe('EasypayController', () => {
  let easypayController: EasypayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EasypayController],
      providers: [EasypayService],
    }).compile();

    easypayController = app.get<EasypayController>(EasypayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(easypayController.getHello()).toBe('Hello World!');
    });
  });
});
