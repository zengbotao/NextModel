import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userRepository.save(createUserDto);
  }

  async findAll() {
    throw new HttpException('错误请求', 401);
    return await this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const qb = this.userRepository.createQueryBuilder();
    return await qb.update().set(updateUserDto).where({ id }).execute();
  }

  async remove(id: number) {
    const qb = this.userRepository.createQueryBuilder();
    return await qb.delete().where({ id }).execute();
  }
}
