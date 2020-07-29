import { Module } from '@nestjs/common';
import { AuthService } from './app/service/auth.service';
import { AuthController } from './ui/auth.controller';
import { UserService } from 'src/users/app/service/user.service';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './app/strategies/jwt.strategy';

@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt', session:false}),
    JwtModule.register({
      secretOrPrivateKey:'estaesmiphrassecreate',
      signOptions:{
        expiresIn: 3600
      }
    }),
    UsersModule],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}

