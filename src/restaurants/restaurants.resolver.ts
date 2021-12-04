import { Query, Resolver } from "@nestjs/graphql";
import { Restaurant } from "./entities/restaurant.entitiy";

@Resolver(()=>Restaurant)
export class RestaurantResolver {
    @Query(()=>Restaurant)
    myRestaurant():boolean {
        return true;
    }
}