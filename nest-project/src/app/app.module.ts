import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { TeachersController } from '../teacher/teacher.controller';
import { StudentsTeachersController } from '../teacher/student.controller';

@Module({
  imports: [],
  controllers: [ StudentController, TeachersController, StudentsTeachersController ]
})
export class AppModule {}
