import { Test, TestingModule } from '@nestjs/testing';
import { UtilitiesController } from './utilities.controller';
import { UtilitiesService } from './utilities.service';

describe('UtilitiesController', () => {
  let utilitiesController: UtilitiesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UtilitiesController],
      providers: [UtilitiesService],
    }).compile();

    utilitiesController = app.get<UtilitiesController>(UtilitiesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(utilitiesController.getHello()).toBe('Hello World!');
    });
  });
});
