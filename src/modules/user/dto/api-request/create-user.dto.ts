import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class CreateUserDto {
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
  phoneNaumber: string;

  @ApiProperty()
  @IsDate()
  birth_date: Date;

  @ApiProperty()
  @IsString()
  gender: string;
}
