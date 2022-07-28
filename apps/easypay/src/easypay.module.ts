import { Module } from '@nestjs/common';
import { EasypayController } from './easypay.controller';
import { EasypayService } from './easypay.service';

@Module({
  imports: [],
  controllers: [EasypayController],
  providers: [EasypayService],
})
export class EasypayModule {}
