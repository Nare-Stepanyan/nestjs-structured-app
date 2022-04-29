import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  delivery_price: number;

  @Column()
  discount: number;

  @Column()
  cal: number;

  // @Column()
  // created_at: Date;

  // @Column()
  // updated_at: Date;
}
