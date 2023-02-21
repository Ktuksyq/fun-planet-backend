import { Controller, Get, Request, Post, Patch, Param, UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { RegistrationService } from './registration/registration.service';
import { UsersService } from './users/users.service';
@Controller()
export class AppController {
  constructor(
    private regServ: RegistrationService,
    private auth: AuthService,
    private user: UsersService
    ) {}

  
  @Post('auth/login')
  async login(@Body() req) {
    return this.auth.login(req);
  }
  @Post('register')
  async register(@Body() req) {
    return this.regServ.registrationUser(req.username, req.email, req.password, req.type);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile/:token')
  getProfile(@Param('token') token: string) {
    return this.user.findOne(token);
  }

}