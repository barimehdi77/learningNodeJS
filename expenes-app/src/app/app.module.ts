import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ValidRequestMiddleware } from 'src/comman/middleware/ValidRequest.widdleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [ AppController ],
  providers: [ AppService ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidRequestMiddleware).forRoutes({
      path: '/',
      method: RequestMethod.PUT
    });
  }
}
