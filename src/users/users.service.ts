// modules
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAccountInput } from "./dtos/create-account.dto";

// entity
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly users:Repository<User>
    ){}

    async createAccount({ email, password, role }: CreateAccountInput){
        try{
            const userExists=await this.users.findOne({email});
            if(userExists){
                // make Error 
                return;
            }
            await this.users.save(this.users.create({ email, password, role }));
            return true;
        }catch(e){
            // make Error
            return;
        }
    }
}