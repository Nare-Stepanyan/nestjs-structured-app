import { UserStatus } from '@app/common/enums/user-status.enum';
import { User } from '@app/db/entity/user.entity';
import { UserRepository } from '@app/db/repository/user.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/api-request/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(createUserDto);
  }
  async updateUserStatus(id: string, status: UserStatus): Promise<User> {
    return this.userRepository.updateUserStatus(id, status);
  }
  async getUserById(id: string): Promise<User> {
    return this.userRepository.getUserById(id);
  }
}
