"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RegistrationService = class RegistrationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ;
    async registrationUser(username, email, password, type) {
        if (type === "Student" || type === "Teacher") {
            if (!await this.prisma.user.findFirst({
                where: {
                    email: email
                }
            })) {
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
            else {
                throw new common_1.BadRequestException("This email is register");
            }
        }
        else {
            throw new common_1.BadRequestException("Type user mast be in ['Student', 'Teacher']");
        }
    }
};
RegistrationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RegistrationService);
exports.RegistrationService = RegistrationService;
//# sourceMappingURL=registration.service.js.map