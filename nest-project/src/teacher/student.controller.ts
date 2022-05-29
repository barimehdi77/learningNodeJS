import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { FindStudentResponseDto } from "src/student/dto/studnet.dto";


@Controller('teachers/:teacherId/students')
export class StudentsTeachersController {
	@Get()
	getStudents(
		@Param('teacherId') teacherId: string
	): FindStudentResponseDto[] {
		return (`List All student of teacher with Id = ${teacherId}`);
	}

	@Put('/:studentId')
	updateStudentByTeacherId(
		@Param('teacherId') teacherId: string,
		@Param('studentId') studentId: string,
		@Body() body
	): FindStudentResponseDto {
		return (`Updating Data of studnent with ID = ${studentId} of teacher with ID = ${teacherId} with the following Data :\n${JSON.stringify(body)}`);
	}
}
