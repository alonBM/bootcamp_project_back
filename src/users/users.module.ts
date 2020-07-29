import { Module } from '@nestjs/common';
import { UserService } from './app/service/user.service';
import { UserController } from './ui/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './infrastructure/Mongodb/user.schema';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  ],
  exports: [UserService],
  providers: [UserService],
  controllers: [UserController]
})
export class UsersModule { }
