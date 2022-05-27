import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  //create our nest application using NestFactory
  await app.listen(3000);                           //run the created application on port 3000
}
bootstrap(); // call bootstrap function
