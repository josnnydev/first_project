import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import {configs} from './config/config'



@Module({
  imports: [ProductModule,MongooseModule.forRoot(configs.DB_URI)],
  controllers: [AppController ],
  providers: [AppService ],
})
export class AppModule {}
