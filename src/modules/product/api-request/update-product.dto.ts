import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  readonly name: string;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  readonly price: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  readonly description: string;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  readonly delivery_price: number;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  readonly discount: number;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  readonly cal: number;
}
