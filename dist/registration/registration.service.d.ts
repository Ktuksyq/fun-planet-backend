import { PrismaService } from 'src/prisma/prisma.service';
export declare class RegistrationService {
    private prisma;
    constructor(prisma: PrismaService);
    registrationUser(username: string, email: string, password: string, type: string): Promise<boolean>;
}
