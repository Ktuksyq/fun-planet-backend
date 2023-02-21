import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private jwtService;
    private prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    validateUser(username: string, pass: string): Promise<User>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
