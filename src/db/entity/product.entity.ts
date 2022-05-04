import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn({
    nullable: false,
    name: 'dt_create',
  })
  created_at: Date;

  @UpdateDateColumn({
    nullable: false,
    name: 'dt_modified',
  })
  updated_at: Date;
}
