import { AuthService } from './auth/auth.service';
import { RegistrationService } from './registration/registration.service';
import { UsersService } from './users/users.service';
export declare class AppController {
    private regServ;
    private auth;
    private user;
    constructor(regServ: RegistrationService, auth: AuthService, user: UsersService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    register(req: any): Promise<boolean>;
    getProfile(token: string): Promise<any>;
}
