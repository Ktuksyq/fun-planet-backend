import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  providers: [RegistrationService, PrismaService],
  exports: [RegistrationService]
})
export class RegistrationModule {}
