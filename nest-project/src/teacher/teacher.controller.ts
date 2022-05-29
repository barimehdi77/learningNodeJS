import { Controller, Get, Put, Param, Body } from "@nestjs/common";
import { FindTeacherResponseDto, TeacherResponseDto } from "./dto/teacher.dto";


@Controller('teachers')
export class TeachersController {
	@Get()
	getTeachers(): FindTeacherResponseDto {
		return ("Get All Teachers");
	};

	@Get('/:teacherId')
	getTeacherById(
		@Param('teacherId') teacherId: string
	): TeacherResponseDto {
		return (`Get Data of teacher with id = ${teacherId}`);
	}
}
