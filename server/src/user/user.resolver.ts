import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query()
  async users() {
    return this.userService.findAll()
  }

  @Mutation() 
  async createUser(@Args('input') input: UserDto) {
    return await this.userService.create(input)
  }

  @Mutation()
  async getUserByEmail(@Args('email') email: string) {
    return await this.userService.getUserByEmail(email)
  }
}
