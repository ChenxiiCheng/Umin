import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserDto, UserLoginDto, UpdateUserInfoDto } from './user.dto';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query()
  async getAllUsers() {
    return this.userService.getAllUsers()
  }

  @Query()
  async getUserByEmail(@Args('email') email: string) {
    return await this.userService.getUserByEmail(email)
  }

  // * create normal user && register user
  @Mutation() 
  async createUser(@Args('user') user: CreateUserDto) {
    return await this.userService.createUser(user)
  }

  // * create admin user
  @Mutation()
  async createAdminUser(@Args('user') user: CreateUserDto) {
    return await this.userService.createAdminUser(user)
  }

  // * create super user
  @Mutation()
  async createSuperUser(@Args('user') user: CreateUserDto) {
    return await this.userService.createSuperUser(user)
  }

  // * login
  @Mutation()
  async login(@Args('user') user: UserLoginDto) {
    return await this.userService.login(user)
  }

  // * update user information
  @Mutation()
  async updateUserInfo(@Args('data') data: UpdateUserInfoDto) {
    return await this.userService.updateUserInfo(data);
  }
}
