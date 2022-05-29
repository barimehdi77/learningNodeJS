import { Controller, Get, Put } from "@nestjs/common";


@Controller('teachers')
export class TeachersController {
	@Get()
	getTeachers() {
		return ("Get All Teachers");
	};

	@Get('/:teacherId')
	getTeacherById() {
		return ("Get Teacher By Id")
	}

	@Get('/:teacherId/students')
	getStudents() {
		return ("All Studnet's of this teacher");
	}

	@Put('/:teacherid/students/:studentid')
	updateStudentByTeacherId() {
		return ("studnet info updated");
	}
}
