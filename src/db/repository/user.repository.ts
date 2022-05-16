import { UserStatus } from '@app/common/enums/user-status.enum';
import { CreateUserDto } from '@app/modules/user/dto/api-request/create-user.dto';
import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const {
      cognito_id,
      firstName,
      lastName,
      email,
      phoneNumber,
      // birth_date,
      gender,
    } = createUserDto;
    const userData = {
      cognito_id,
      firstName,
      lastName,
      email,
      phoneNumber,
      // birth_date,
      gender,
    };
    console.log(userData, 'userData');
    const user = this.create(userData);
    await this.save(user);
    return user;
  }
  async updateUserStatus(id: string, status: UserStatus): Promise<User> {
    const product = await this.getUserById(id);
    product.status = status;
    await this.save(product);
    return product;
  }

  async getUserById(id: string): Promise<User> {
    const product = await this.findOne(id);
    if (!product) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return product;
  }
}
