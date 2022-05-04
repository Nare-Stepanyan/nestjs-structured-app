import { IsString, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  @IsString()
  readonly id: string;

  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsNumber()
  readonly price: number;

  @ApiProperty()
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsNumber()
  readonly delivery_price: number;

  @ApiProperty()
  @IsNumber()
  readonly discount: number;

  @ApiProperty()
  @IsNumber()
  readonly cal: number;

  @ApiProperty()
  @IsDate()
  readonly created_at: Date;

  @ApiProperty()
  @IsDate()
  readonly updated_at: Date;
}
