import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";

import { Restaurant } from "./entities/restaurant.entitiy";

@Injectable()
export class RestaurantService {
    constructor(
        @InjectRepository(Restaurant)
        private readonly restaurants: Repository<Restaurant>
    ) {}

    getAll(): Promise<Restaurant[]> {
        return this.restaurants.find();
        // 실제로 DB에 접근하는 방법 작성
    }
    createRestaurant(createRestaurantDto: CreateRestaurantDto){
        /* Nest.js 에서 객체 생성 시에는 2가지 방법이 있다.
            1. 일반적인 클래스 객체화
                const newRestaurant=new Restaurant();
                newRestaurant.name=createRestaurantDto.name;
                ...
            2. create 메서드로 인스턴스화
                const newRestaurant=this.restaurants.create(createRestaurantDto);
        */
        const newRestaurant=this.restaurants.create(createRestaurantDto);
        return this.restaurants.save(newRestaurant);
    }
}