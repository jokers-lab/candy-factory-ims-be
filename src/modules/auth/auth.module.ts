import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthController } from '../../controllers/auth/auth.controller';
import { AuthService } from 'src/services/auth/auth.service';
import { jwtSecret } from 'src/utils/constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/utils/auth.guard';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtSecret.secret,
      signOptions: { expiresIn: '10h' },
    }),
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
