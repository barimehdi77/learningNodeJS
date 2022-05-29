import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";


@Controller('students')
export class StudentController {
	@Get()
	getStudents() {
		return ("all students");
	}

	@Get('/:studentId')
	getStudetById(
		@Param('studentId') studentId: string
	) {
		return (`Get Data of student with id = ${studentId}`);
	}

	@Post()
	createStudent(
		@Body() body
	) {
		return (`Create Student with following Data :\n${JSON.stringify(body)}`);
	}

	@Put('/:studentId')
	updateStudent(
		@Param('studentId') studentId: string,
		@Body() body
	) {
		return (`Updating Data of Student with ID = ${studentId} with the following Data :\n${JSON.stringify(body)}`);
	}
}
