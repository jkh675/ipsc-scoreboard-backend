import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
    ) {}

    async signIn(username: string, income_password: string): Promise<any> {
        const user = await this.usersService.findOneByUsername(username);
        if (user?.password !== income_password) {
            throw new UnauthorizedException();
        }
        const payload = { uid: user.uid, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
