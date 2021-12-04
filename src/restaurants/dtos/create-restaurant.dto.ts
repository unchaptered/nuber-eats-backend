import { Field, ArgsType } from "@nestjs/graphql";

/* GraphQL 은 Objective Args 를 두 가지 타입으로 받아들인다.
    1. InputType
    2. ArgsType

    InputType으로 하면 마치 클래스 처럼 새로운 Object 로 포장을 한다.
    ArgsType 은 기본적으로 개별적인 요소들을 유지 한 채 뭉쳐 놓기만 한다.
    즉, ArgsType 은 사실상 코드를 짧게 쓰기 위한 목적인 것이다.
*/
@ArgsType()
export class CreateRestaurantDto {
    @Field(()=>String )
    name: string;

    @Field(()=>Boolean )
    isVegan: boolean;

    @Field(()=>String )
    address: string;

    @Field(()=> String )
    ownerName:string;
}