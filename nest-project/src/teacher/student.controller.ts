import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { StudentService } from "src/student/student.service";
import { FindStudentResponseDto, StudentResponseDto, updateStudentDto } from "../student/dto/studnet.dto";
import { TeacherService } from "./teacher.service";


@Controller('teachers/:teacherId/students')
export class StudentsTeachersController {
	constructor ( private readonly teacherService: TeacherService,
		private readonly studentService: StudentService) {}

	@Get()
	getStudents(
		@Param('teacherId') teacherId: string
	): FindStudentResponseDto[] {
		return (this.studentService.getStudentByTeacherId(teacherId));
	}

	@Put('/:studentId')
	updateStudentByTeacherId(
		@Param('teacherId') teacherId: string,
		@Param('studentId') studentId: string,
		@Body() body: updateStudentDto
	): StudentResponseDto {
		return (this.teacherService.updateStudentByTeacherId(teacherId, studentId, body));
	}
}
