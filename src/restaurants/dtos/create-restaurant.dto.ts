import { InputType, OmitType } from "@nestjs/graphql";

import { Restaurant } from "../entities/restaurant.entitiy";

/* GraphQL 은 Objective Args 를 두 가지 타입으로 받아들인다.
    1. InputType
    2. ArgsType

    InputType으로 하면 마치 클래스 처럼 새로운 Object 로 포장을 한다.
    ArgsType 은 기본적으로 개별적인 요소들을 유지 한 채 뭉쳐 놓기만 한다.
    즉, ArgsType 은 사실상 코드를 짧게 쓰기 위한 목적인 것이다.
*/
@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant, ["id"]){
    /*  부모 클래스는 @ObjectType 이고
        자식 클래스는 @InputType 이다.

        OmitType 기능을 쓰고 싶은데 부모 클래스가 @ObjectType 이기 때문에,
        만약  InputType 이 아닌 대상에 이것을 사용하고 싶다면,
        반드시 새로운 매개변수로 어떤 타입으로 재정의 할 것인지 명시해야 한다.
    */
}
