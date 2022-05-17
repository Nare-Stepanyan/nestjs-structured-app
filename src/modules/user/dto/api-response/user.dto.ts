import { UserStatus } from '@app/common/enums/user-status.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsString()
  readonly id: string;

  @ApiProperty()
  @IsString()
  cognito_id: string;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  phoneNumber: string;

  @ApiProperty()
  @IsDate()
  birth_date: Date;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsEnum(UserStatus)
  readonly status: UserStatus;

  @ApiProperty()
  @IsDate()
  readonly created_at: Date;

  @ApiProperty()
  @IsDate()
  readonly updated_at: Date;
}
