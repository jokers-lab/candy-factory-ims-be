import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, passCode: string): Promise<any> {
    const user = await this.userService.findSingleUser(username);
    if (user?.password !== passCode) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.uid, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
