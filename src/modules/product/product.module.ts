import { Product } from '@app/db/entity/product.entity';
import { ProductRepository } from '@app/db/repository/product.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository, Product])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
