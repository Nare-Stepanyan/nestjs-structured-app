import {
  Controller,
  HttpStatus,
  HttpCode,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/api-request/auth-credentials.dto';
import { AuthRegisterDto } from './dto/api-request/auth-register.dto';
import { UserDto } from './dto/api-response/user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login' })
  @ApiOkResponse({ status: HttpStatus.OK, type: UserDto })
  async login(@Body() authenticateRequest: AuthCredentialsDto) {
    try {
      return await this.authService.authenticateUser(authenticateRequest);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Post('register')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Register' })
  async register(@Body() registerRequest: AuthRegisterDto) {
    return await this.authService.registerUser(registerRequest);
  }
}
