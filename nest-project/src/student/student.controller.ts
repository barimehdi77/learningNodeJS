import { Controller, Get, Post, Put } from "@nestjs/common";


@Controller('students')
export class StudentController {
	@Get()
	getStudents() {
		return ("all students");
	}

	@Get('/:studentId')
	getStudetById() {
		return ("Get Student By Id");
	}

	@Post()
	createStudent() {
		return ("Create Student");
	}

	@Put('/:studentId')
	updateStudent() {
		return ("Update Student By Id");
	}
}
