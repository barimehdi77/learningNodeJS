import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { CreateStudentDto, FindStudentResponseDto, StudnetResponseDto, updateStudentDto } from "./dto/studnet.dto";
// import {}


@Controller('students')
export class StudentController {
	@Get()
	getStudents(): FindStudentResponseDto[] {
		return ("all students");
	}

	@Get('/:studentId')
	getStudetById(
		@Param('studentId') studentId: string
	): FindStudentResponseDto {
		return (`Get Data of student with id = ${studentId}`);
	}

	@Post()
	createStudent(
		@Body() body: CreateStudentDto
	): CreateStudentDto {
		return (`Create Student with following Data :\n${JSON.stringify(body)}`);
	}

	@Put('/:studentId')
	updateStudent(
		@Param('studentId') studentId: string,
		@Body() body: CreateStudentDto
	): updateStudentDto {
		return (`Updating Data of Student with ID = ${studentId} with the following Data :\n${JSON.stringify(body)}`);
	}
}
