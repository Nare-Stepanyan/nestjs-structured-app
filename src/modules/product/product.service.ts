import { ProductStatus } from '@app/common/enums/product-status.enum';
import { Product } from '@app/db/entity/product.entity';
import { ProductRepository } from '@app/db/repository/product.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/api-request/create-product.dto';
import { UpdateProductDto } from './dto/api-request/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.getAllProducts();
  }
  async getProductById(id: string): Promise<Product> {
    return this.productRepository.getProductById(id);
  }
  async deleteProduct(id: string): Promise<void> {
    return this.productRepository.deleteProduct(id);
  }
  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productRepository.updateProduct(id, updateProductDto);
  }
  async updateProductStatus(
    id: string,
    status: ProductStatus,
  ): Promise<Product> {
    return this.productRepository.updateProductStatus(id, status);
  }
  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.createProduct(createProductDto);
  }
}
