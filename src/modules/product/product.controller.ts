import { Product } from '@app/db/entity/product.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/api-request/create-product.dto';
import { ProductStatusDto } from './dto/api-request/product-status.dto';
import { UpdateProductDto } from './dto/api-request/update-product.dto';
import { ProductDto } from './dto/api-response/product.dto';
import { ProductService } from './product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all products' })
  @ApiOkResponse({ status: HttpStatus.OK, type: ProductDto })
  getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get product by ID' })
  @ApiOkResponse({ status: HttpStatus.OK, type: ProductDto })
  getProductById(@Param('id') id: string): Promise<Product> {
    return this.productService.getProductById(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create Product' })
  @ApiOkResponse({ status: HttpStatus.CREATED, type: ProductDto })
  @ApiBody({ type: CreateProductDto })
  createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update Product' })
  @ApiOkResponse({ status: HttpStatus.OK, type: ProductDto })
  @ApiBody({ type: UpdateProductDto })
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Patch('/:id/status')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update Product Status' })
  @ApiOkResponse({ status: HttpStatus.OK, type: ProductDto })
  @ApiBody({ type: ProductStatusDto })
  updateProductStatus(
    @Param('id') id: string,
    @Body() productStatusDto: ProductStatusDto,
  ): Promise<Product> {
    const { status } = productStatusDto;
    return this.productService.updateProductStatus(id, status);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete Product' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: ProductDto,
  })
  deleteProduct(@Param('id') id: string): Promise<void> {
    return this.productService.deleteProduct(id);
  }
}
