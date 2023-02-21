import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService
  ) {}

  async validateUser(username: string, pass: string): Promise<User> {
    // замість findFirst використовуємо findUnique, щоб повернути конкретного юзера або null
    const user = this.prisma.user.findFirst({
      where: {
        AND: {
          name: username,
          password: pass
        }
      }
    });

    return user;
  }

  async login(user: any) {
    const validUser = await this.validateUser(user.username, user.password);

    if(validUser) {
      const payload = { username: user.username, sub: user.password };
      const access_tok = this.jwtService.sign(payload);

      // використовуємо update, щоб оновити токен у базі даних для залогіненого юзера
      const updateUser = await this.prisma.user.update({
        where: {
          id: validUser.id
        },
        data: {
          token: access_tok
        }
      });

      // повертаємо токен
      return {
        access_token: access_tok
      };
    } else {
      // якщо юзера не знайдено, повертаємо 401
      throw new UnauthorizedException('Неправильне ім\'я користувача або пароль.');
    }
  }
}
