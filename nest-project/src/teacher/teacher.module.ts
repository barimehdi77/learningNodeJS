import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { StudentsTeachersController } from './student.controller';
import { TeachersController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
	imports: [ StudentModule ],
	controllers: [ TeachersController, StudentsTeachersController ],
	providers: [ TeacherService ]
})
export class TeacherModule {}
