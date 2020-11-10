import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { verify } from 'jsonwebtoken'; 

interface IUserPayload {
  id: number;
  isActive: boolean;
  isAdmin: boolean;
  isSuperUser: boolean;
}

@Injectable()
export class authTokenAndRoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext()
    const neededRoles = this.reflector.get<string[]>('roles', context.getHandler())

    if (!ctx.headers.authorization) {
      return false
    }

    // * {id: number, isAdmin: true/false, isSuperUser: true/false, isActive: true/false}
    const userPayload = await this.validateAndDecodeToken(ctx.headers.authorization)

    if (!userPayload) return false
    if (!neededRoles) return true

    // * neededRoles = ['activeUser', 'adminUser', 'superUser']
    for (const role of neededRoles) {
      if (role === 'adminUser' && (userPayload as IUserPayload).isAdmin) return true
      else if (role === 'superUser' && (userPayload as IUserPayload).isSuperUser) return true
      else if (role === 'activeUser' && (userPayload as IUserPayload).isActive) return true
    }

    return false
  }

  async validateAndDecodeToken(auth: string) {
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