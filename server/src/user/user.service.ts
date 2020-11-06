import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { genSalt, hash } from 'bcryptjs';

import { UserEntity } from './user.entity';
import { CreateUserDto, UpdateUserInfoDto, UserLoginDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>
  ) {}
  
  // * Get all users info
  async getAllUsers() {
    return this.userRepo.find()
  }

  async getUserByEmail(email: string) {
    return await this.userRepo.findOne({email})
  }

  // * create normal user
  async createUser(user: CreateUserDto) {
    const isUserExist = await this.getUserByEmail(user.email) || null

    if (isUserExist) {
      return new ConflictException('user already exist!')
    }

    const hashedUser = await this.hashPassword(user)

    return await this.userRepo.create(hashedUser).save()
  }

  // * create admin user
  async createAdminUser(user: CreateUserDto) {
    const isUserExist = await this.getUserByEmail(user.email) || null

    if (isUserExist) {
      return new ConflictException('user already exist!')
    }

    const hashedUser = await this.hashPassword(user)

    return await this.userRepo.create({...hashedUser, isAdmin: true}).save()
  }

  // * create super user
  async createSuperUser(user: CreateUserDto) {
    const isUserExist = await this.getUserByEmail(user.email) || null

    if (isUserExist) {
      return new ConflictException('user already exist!')
    }

    const hashedUser = await this.hashPassword(user)

    return await this.userRepo.create({...hashedUser, isSuperUser: true}).save()
  }

  // * login
  async login(user: UserLoginDto) {
    const isUserExist = await this.getUserByEmail(user.email) || null

    if (!isUserExist) {
      return new BadRequestException('Please register an account first...')
    }

    const token = await this.createToken(isUserExist)

    return {isUserExist, token}
  }

  // * update user information
  async updateUserInfo(user: UpdateUserInfoDto) {
    const queryUser = await this.getUserByEmail(user.email)

    if (!queryUser) {
      return new BadRequestException('User does not exist, please renter a valid email address!')
    }

    queryUser.nickname = user.nickname
    queryUser.password = user.password
    queryUser.save()

    return queryUser
  }

  // * create token
  async createToken(user: UserEntity) {
    const { id, isAdmin, isSuperUser, isActive } = user
    const token = await sign({ id, isAdmin, isSuperUser, isActive } , process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})

    return token
  }

  // * hash password
  async hashPassword(user: CreateUserDto) {
    const passwordSalt = await genSalt(10)
    user.password = await hash(user.password, passwordSalt)

    return user
  }
}
