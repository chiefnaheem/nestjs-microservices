import { Controller, Get } from '@nestjs/common';
import { UtilitiesService } from './utilities.service';

@Controller()
export class UtilitiesController {
  constructor(private readonly utilitiesService: UtilitiesService) {}

  @Get()
  getHello(): string {
    return this.utilitiesService.getHello();
  }
}
