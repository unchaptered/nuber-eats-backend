import { Args, Query, Mutation, Resolver } from "@nestjs/graphql";

import { Restaurant } from "./entities/restaurant.entitiy";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";
import { RestaurantService } from "./restaurant.service";
import { UpdateRestaurantDto } from "./dtos/update-restaurant.dto";

@Resolver(()=>Restaurant)
export class RestaurantResolver {
    constructor(private readonly restaurantService : RestaurantService){}
    /* @Args("veganOnly") 는 GraphQL 의 Args 선언이고
        veganOnly:boolean 이 TS-entity 를 위한 Args 선언이다.
    */
    @Query(()=>[Restaurant])
    restaurants(): Promise<Restaurant[]>{
        return this.restaurantService.getAll();
    }
    @Mutation(()=>Boolean)
    async createRestaurant(
        @Args("input") createRestaurantDto: CreateRestaurantDto
    ): Promise<boolean> {
        try{
            await this.restaurantService.createRestaurant(createRestaurantDto);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    }
    @Mutation(()=>Boolean)
    async updateRestaurant(
        /*Args 입력받는 방법 2 가지
            data:somthingDto 와 id:number 를 동시에 보내는 방법.
                @Args("id") id:number,
                @Args("input") data:UpdateRestaurantDto,
            data:somthingDto 와 id:number 를 하나로 합쳐서 data:objectiveDto 를 새로 만들어 보내는 방법
        */
        @Args("id") id:number,
        @Args("input") data:UpdateRestaurantDto
    ) {
        return true;
    }
}