import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { TeachersController } from '../teacher/teacher.controller';
import { StudentsTeachersController } from '../teacher/student.controller';
import { StudentService } from '../student/student.service';
import { TeacherService } from '../teacher/teacher.service';

@Module({
  imports: [],
  controllers: [ StudentController, TeachersController, StudentsTeachersController ],
  providers: [ StudentService, TeacherService ]
})
export class AppModule {}
