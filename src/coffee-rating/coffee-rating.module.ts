import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesService } from '../coffees/coffees.service';
import { CoffeesModule } from '../coffees/coffees.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [CoffeesModule, DatabaseModule.forFeature()],
  providers: [CoffeeRatingService, CoffeesService],
})
export class CoffeeRatingModule {}
