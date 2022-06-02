import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, updateStudentDto } from "./dto/studnet.dto";
import { StudentService } from "./student.service";


@Controller('students')
export class StudentController {
	constructor(private readonly studentServeice: StudentService) {};

	@Get()
	getStudents(): FindStudentResponseDto[] {
		return (this.studentServeice.getStudents());
	}

	@Get('/:studentId')
	getStudetById(
		@Param('studentId') studentId: string
	): FindStudentResponseDto {
		return (this.studentServeice.getStudentById(studentId));
	}

	@Post()
	createStudent(
		@Body() body: CreateStudentDto
	): StudentResponseDto {
		return (this.studentServeice.createStudent(body));
	}

	@Put('/:studentId')
	updateStudent(
		@Param('studentId') studentId: string,
		@Body() body: updateStudentDto
	): StudentResponseDto {
		return (this.studentServeice.updateStudent(studentId, body));
	}
}
