import { Controller, Get, Put } from "@nestjs/common";


@Controller('/:teacher/students')
export class StudentsTeachersController {
	@Get('')
	getStudents() {
		return ("All Studnet's of this teacher");
	}

	@Put('/:studentid')
	updateStudentByTeacherId() {
		return ("studnet info updated");
	}
}
 ``
