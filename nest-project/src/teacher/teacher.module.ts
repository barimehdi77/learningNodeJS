import { MiddlewareConsumer, Module, NestMiddleware, NestModule, RequestMethod } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { StudentsTeachersController } from './student.controller';
import { TeachersController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { ValidTeacherMiddlewear } from '../common/middlewear/ValidTeacher.middlewear'

@Module({
	imports: [ StudentModule ],
	controllers: [ TeachersController, StudentsTeachersController ],
	providers: [ TeacherService ]
})
export class TeacherModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(ValidTeacherMiddlewear).forRoutes({
			path: '/teachers/:teacherid',
			method: RequestMethod.GET
		});
		consumer.apply(ValidTeacherMiddlewear).forRoutes({
			path: '/teachers/:teacherid/students',
			method: RequestMethod.GET
		});
		consumer.apply(ValidTeacherMiddlewear).forRoutes({
			path: '/teachers/:teacherid/students/:studentid',
			method: RequestMethod.PUT
		});
	}
}
