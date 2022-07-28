import { Controller, Get } from '@nestjs/common';
import { EasypayService } from './easypay.service';

@Controller()
export class EasypayController {
  constructor(private readonly easypayService: EasypayService) {}

  @Get()
  getHello(): string {
    return this.easypayService.getHello();
  }
}
