import { PrismaService } from 'src/prisma/prisma.service';
export type User = any;
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(token: string): Promise<User | undefined>;
}
