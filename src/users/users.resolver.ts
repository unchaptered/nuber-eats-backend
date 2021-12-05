// modules
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateAccountInput, CreateAccountOutput } from "./dtos/create-account.dto";

// entity
import { User } from "./entities/user.entity";

// injectable Service Module
import { UsersService } from "./users.service";

@Resolver(()=>User)
export class UsersResolver {
    constructor(
        private readonly usersService:UsersService
    ){}

    @Query(()=>Boolean)
    hi() {
        return true;
    }

    @Mutation(()=>CreateAccountOutput)
    createAccount(
        @Args("input") createAccountInput:CreateAccountInput
    ){}
}