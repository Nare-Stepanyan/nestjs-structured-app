import { ProductStatus } from '@app/common/enums/product-status.enum';
import { CreateProductDto } from '@app/modules/product/api-request/create-product.dto';
import { UpdateProductDto } from '@app/modules/product/api-request/update-product.dto';
import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../entity/product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
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
    const product = this.create(productData);
    await this.save(product);
    return product;
  }
  async getAllProducts(): Promise<Product[]> {
    const products = await this.find();
    return products;
  }
  async getProductById(id: string): Promise<Product> {
    const product = await this.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    return product;
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.getProductById(id);
    const updatedProduct = { ...product, ...updateProductDto };
    await this.save(updatedProduct);
    return await this.findOne(id);
  }

  async updateProductStatus(
    id: string,
    status: ProductStatus,
  ): Promise<Product> {
    const product = await this.getProductById(id);
    product.status = status;
    await this.save(product);
    return product;
  }
}
