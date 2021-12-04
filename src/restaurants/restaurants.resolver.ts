import { Args, Query, Mutation, Resolver } from "@nestjs/graphql";
import { Restaurant } from "./entities/restaurant.entitiy";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";

@Resolver(()=>Restaurant)
export class RestaurantResolver {
    /* @Args("veganOnly") 는 GraphQL 의 Args 선언이고
        veganOnly:boolean 이 TS-entity 를 위한 Args 선언이다.
    */
    @Query(()=>[Restaurant])
    restaurants(@Args("veganOnly") veganOnly: boolean):Restaurant[]{
        console.log(veganOnly);
        return [];
    }
    @Mutation(()=>Boolean)
    createRestaurant(
        @Args() createRestaurantDto: CreateRestaurantDto
    ):boolean {
        return true;
    }
}