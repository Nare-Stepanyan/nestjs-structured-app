import { User } from '@app/db/entity/user.entity';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/api-request/create-user.dto';
import { UserStatusDto } from './dto/api-request/user-status.dto';
import { UserDto } from './dto/api-response/user.dto';
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
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto, 'createUserdto');
    return this.userService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('/:id/status')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update User Status' })
  @ApiOkResponse({ status: HttpStatus.OK, type: UserDto })
  @ApiBody({ type: UserStatusDto })
  @ApiBearerAuth()
  updateUserStatus(
    @Param('id') id: string,
    @Body() userStatusDto: UserStatusDto,
  ): Promise<User> {
    const { status } = userStatusDto;
    return this.userService.updateUserStatus(id, status);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiOkResponse({ status: HttpStatus.OK, type: UserDto })
  getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }
}
