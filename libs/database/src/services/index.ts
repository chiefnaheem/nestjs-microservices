import { Injectable } from '@nestjs/common';
import { UsersService } from './user.service';
import { AuthService } from './auth.service';

@Injectable()
export class DatabaseService {
  constructor(
    readonly authRepository: AuthService,
    readonly userRepository: UsersService,
  ) {}
}
