import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'username', description: 'Username' })
  @Column({ unique: true })
  username: string;

  @ApiProperty({ example: 'pAssw21ord', description: 'Password' })
  @Column()
  password: string;
}
