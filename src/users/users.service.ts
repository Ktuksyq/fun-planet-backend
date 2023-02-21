import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService
  ){}

  async findOne(token: string): Promise<User | undefined> {
    return this.prisma.user.findFirst({
      where: {
      token: token
    }});
  }
}