import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilitiesService {
  getHello(): string {
    return 'Hello World!';
  }
}
