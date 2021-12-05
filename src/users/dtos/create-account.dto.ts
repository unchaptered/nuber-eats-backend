import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { User } from "../entities/user.entity";

/* PickType 은 상속 할 부모 Type 에서 특정 값만 선택할 수 있습니다.
*/
@InputType()
export class CreateAccountInput extends PickType(User, [
    "email",
    "password",
    "role"
]) {}

@ObjectType()
export class CreateAccountOutput {
    @Field(()=>String, { nullable:true })
    error?:string;

    @Field(()=>Boolean)
    ok: boolean;
}