import { IsString, IsNumber, IsDate, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProductStatus } from '@app/common/enums/product-status.enum';

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
  @IsEnum(ProductStatus)
  readonly status: ProductStatus;

  @ApiProperty()
  @IsDate()
  readonly created_at: Date;

  @ApiProperty()
  @IsDate()
  readonly updated_at: Date;
}
