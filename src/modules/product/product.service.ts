import { ProductStatus } from '@app/common/enums/product-status.enum';
import { Product } from '@app/db/entity/product.entity';
import { ProductRepository } from '@app/db/repository/product.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './api-request/create-product.dto';
import { UpdateProductDto } from './api-request/update-product.dto';

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
    const result = await this.productRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID: ${id} not found`);
    }
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
