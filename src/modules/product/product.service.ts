import { Product } from '@app/db/entity/product.entity';
import { ProductRepository } from '@app/db/repository/product.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './api-request/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  async getProductById(id: string): Promise<Product> {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    return product;
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const {
      name,
      price,
      description,
      delivery_price,
      cal,
      // created_at,
      // updated_at,
      discount,
    } = createProductDto;
    const productData = {
      name,
      price,
      description,
      delivery_price,
      cal,
      // created_at,
      // updated_at,
      discount,
    };
    const product = this.productRepository.create(productData);
    await this.productRepository.save(product);
    return product;
  }
}
