import { Controller, Get } from "@nestjs/common";


@Controller('students')
export class StudentController {
	@Get()
	getStudents() {
		return ("all students");
	}
}
