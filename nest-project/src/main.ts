import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { StudentController } from "./student/student.controller";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
bootstrap();
