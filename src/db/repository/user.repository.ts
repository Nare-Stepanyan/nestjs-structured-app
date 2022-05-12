import { CreateUserDto } from '@app/modules/user/dto/api-request/create-user.dto';
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
      phoneNaumber,
      birth_date,
      gender,
    } = createUserDto;
    const userData = {
      cognito_id,
      firstName,
      lastName,
      email,
      phoneNaumber,
      birth_date,
      gender,
    };
    const user = this.create(userData);
    await this.save(user);
    return user;
  }
}
