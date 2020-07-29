import { Controller, Post, Logger, Body, Get, UseGuards, Req } from '@nestjs/common';
import { RegisterUserDto } from '../domain/dto/register-user-dto';
import { UserService } from '../app/service/user.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';


@Controller('register')
export class UserController {

    constructor(private userService: UserService) { }

    @Post()
    registerUser(
        @Body() registerUserDto: RegisterUserDto) {
        let data = this.userService.registerUser(registerUserDto);
        Logger.log(data);
        return data;
    }

    @Get()
    @UseGuards(AuthGuard())
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get('/guard')
    @UseGuards(AuthGuard())
    getGuardUser(@Req() req: Request) {
        Logger.log(JSON.stringify(req['user']));
        return "Entra";
    }


}
