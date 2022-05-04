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
    const products = await this.productRepository.find();
    return products;
  }

  async getProductById(id: string): Promise<Product> {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    return product;
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
    const product = await this.getProductById(id);
    const updatedProduct = { ...product, ...updateProductDto };
    await this.productRepository.update(id, updatedProduct);
    return await this.productRepository.findOne(id);
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const { name, price, description, delivery_price, cal, discount } =
      createProductDto;
    const productData = {
      name,
      price,
      description,
      delivery_price,
      cal,
      discount,
    };
    const product = this.productRepository.create(productData);
    await this.productRepository.save(product);
    return product;
  }
}
