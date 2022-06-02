import { Body, Controller, Get, Param, ParseUUIDPipe, Put } from "@nestjs/common";
import { StudentService } from "src/student/student.service";
import { FindStudentResponseDto, StudentResponseDto, updateStudentDto } from "../student/dto/studnet.dto";
import { TeacherService } from "./teacher.service";


@Controller('teachers/:teacherId/students')
export class StudentsTeachersController {
	constructor ( private readonly teacherService: TeacherService,
		private readonly studentService: StudentService) {}

	@Get()
	getStudents(
		@Param('teacherId', new ParseUUIDPipe()) teacherId: string
	): FindStudentResponseDto[] {
		return (this.studentService.getStudentByTeacherId(teacherId));
	}

	@Put('/:studentId')
	updateStudentByTeacherId(
		@Param('teacherId', new ParseUUIDPipe()) teacherId: string,
		@Param('studentId', new ParseUUIDPipe()) studentId: string,
		@Body() body: updateStudentDto
	): StudentResponseDto {
		return (this.teacherService.updateStudentByTeacherId(teacherId, studentId, body));
	}
}
