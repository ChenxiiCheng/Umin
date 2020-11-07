import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { verify } from 'jsonwebtoken'; 

@Injectable()
export class authTokenGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext()

    if (!ctx.headers.authorization) {
      return false
    }

    ctx.user = await this.validateToken(ctx.headers.authorization)

    return true
  }

  async validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new UnauthorizedException('Invalid token')
    }

    const token = auth.split(' ')[1]

    try {
      return await verify(token, process.env.JWT_SECRET)
    } catch (error) {
      throw new UnauthorizedException('Invalid token')
    }
  }
}