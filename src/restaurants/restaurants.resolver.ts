import { Args, Query, Resolver } from "@nestjs/graphql";
import { Restaurant } from "./entities/restaurant.entitiy";

@Resolver(()=>Restaurant)
export class RestaurantResolver {
    @Query(()=>[Restaurant])
    restaurants(@Args("veganOnly") veganOnly: boolean):Restaurant[]{
        console.log(veganOnly);
        return [];
    }
    /* @Args("veganOnly") 는 GraphQL 의 Args 선언이고
        veganOnly:boolean 이 TS-entity 를 위한 Args 선언이다.
    */
}