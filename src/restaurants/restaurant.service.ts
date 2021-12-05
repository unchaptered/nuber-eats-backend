import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";
import { UpdateRestaurantDto } from "./dtos/update-restaurant.dto";

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
    updateRestaurant({id, data}:UpdateRestaurantDto){
        /* update() 메서드는 entity 에서 criteria 와 feature 들을 update 하고 싶은 entity 의 field 를 보내야 한다.
            첫 번째 인자로 criteria 값을 주고 이 값과 동일한 data가 있는지 search 하게 된다.
            그리고 두 번째 인자와 합쳐서 정보를 넘겨주게 된다.

            존재하지 않더라고 에러가 발생하지 않고 따라서,
            경우에 따라 더 빨리 프로세스가 종료될 수도 있다.
        */
        return this.restaurants.update(id, { ...data });
    }
}