import { Injectable } from '@nestjs/common';

@Injectable()
export class EasypayService {
  getHello(): string {
    return 'Hello World!';
  }
}
