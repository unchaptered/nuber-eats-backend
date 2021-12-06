// Modules
import { Column, Entity } from "typeorm";
// Parents
import { CoreEntity } from "src/common/entities/core.entity";
import { Field, InputType, ObjectType, registerEnumType } from "@nestjs/graphql";

// Enum 의 숫자값은 DB 로 가게된다.
enum UserRole {
    Client,
    Owner,
    Delivery,
}

// Enum Type 생성 for GraphQL
registerEnumType(UserRole, {name:"UserRole"});

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class User extends CoreEntity {

    @Column()
    @Field(()=>String)
    email:string;

    @Column()
    @Field(()=>String)
    password:string;

    @Column({type:"enum", enum: UserRole})
    @Field(()=>UserRole)
    role: UserRole;
}