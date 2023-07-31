import { Module } from '@nestjs/common';
import {
  ConfigModule as NestJSConfigModule,
  ConfigService,
} from '@nestjs/config';
import { GlobalConfig } from './config-wrapper';

@Module({
  imports: [NestJSConfigModule.forRoot({ load: [GlobalConfig] })],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
