import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    create(createUserDto: CreateUserDto) {
        return "This action adds a new user";
    }

    async findAll() {
        return await this.usersRepository.findBy({});
    }

    async findOne(id: number) {
        return await this.usersRepository.findOneBy({
            uid: id,
        });
    }

    async findOneByUsername(username: string) {
        return await this.usersRepository.findOneBy({
            username: username,
        });
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}