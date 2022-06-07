import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ValidStudentMiddlewear } from '../common/middlewear/ValidStudent.middlewear';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
	controllers: [ StudentController],
	providers: [ StudentService],
	exports: [ StudentService ]
})
export class StudentModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(ValidStudentMiddlewear).forRoutes({
			path: '/students/:studentid',
			method: RequestMethod.GET
		});
		consumer.apply(ValidStudentMiddlewear).forRoutes({
			path: '/students/:studentid',
			method: RequestMethod.PUT
		});
		
	}
}
