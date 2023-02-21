import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class RegistrationService {
    constructor(
    private prisma: PrismaService
    ) {};
    async registrationUser(username: string, email: string, password: string, type: string){
        if(type  === "Student" || type === "Teacher"){
        if(!await this.prisma.user.findFirst({
          where: {
            email: email
          }
        })){
          await this.prisma.user.create({
              data: {
                name: username,
                email: email,
                password: password,
                token: "",
                type: type,
              },
            });
            return true;
          }
          else{
            throw new BadRequestException("This email is register")
          }
    }
    else{
        throw new BadRequestException("Type user mast be in ['Student', 'Teacher']")
    }  
}
}
