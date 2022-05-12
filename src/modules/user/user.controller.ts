import { User } from '@app/db/entity/user.entity';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../auth/dto/api-response/user.dto';
import { CreateUserDto } from './dto/api-request/create-user.dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create User' })
  @ApiOkResponse({ status: HttpStatus.CREATED, type: UserDto })
  @ApiBody({ type: CreateUserDto })
  createProduct(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }
}
