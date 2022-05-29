import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { TeachersController } from '../teacher/teacher.controller';

@Module({
  imports: [],
  controllers: [ StudentController, TeachersController ]
})
export class AppModule {}
