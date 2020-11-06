import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>
  ) {}
  
  async findAll() {
    return this.userRepo.find()
  }

  async getUserByEmail(email: string) {
    return await this.userRepo.findOne({email})
  }

  async create(input: UserDto) {
    return await this.userRepo.create(input).save()
  }
}
