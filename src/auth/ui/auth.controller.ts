import { Controller, Post, Body, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { LoginUserDto } from '../domain/dto/login-user-dto';
import { AuthService } from '../app/service/auth.service';
import { LoginResponse } from '../domain/dto/login-response-dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post()
    async login(@Body() loginUserDto: LoginUserDto): Promise<LoginResponse> {
        let result = await this.authService.login(loginUserDto);
        Logger.log("Resultado ->" + result);
        return result;
    }
}
