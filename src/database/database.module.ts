import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { Coffee } from '../coffees/entities/coffee.entity';
import { Flavor } from '../coffees/entities/flavor.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const dbConfig = configService.get('db.global');
        return { ...dbConfig, entities: [Coffee, Flavor] };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {
  static forFeature() {
    return TypeOrmModule.forFeature([Coffee, Flavor]);
  }
}
