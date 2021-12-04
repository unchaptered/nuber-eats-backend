import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// imports
import { Restaurant } from './entities/restaurant.entitiy';

// provider
import { RestaurantService } from './restaurant.service';
import { RestaurantResolver } from './restaurants.resolver';

@Module({
    imports: [
        TypeOrmModule.forFeature([Restaurant])
    ],
    providers: [
        RestaurantResolver,
        RestaurantService
    ],
})
export class RestaurantsModule {}
