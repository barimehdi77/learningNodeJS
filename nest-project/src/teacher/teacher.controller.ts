import { Controller, Get, Put, Param, Body } from "@nestjs/common";
import { FindTeacherResponseDto, TeacherResponseDto } from "./dto/teacher.dto";
import { TeacherService } from "./teacher.service";


@Controller('teachers')
export class TeachersController {
	constructor (private readonly teacherserver: TeacherService) {}
	@Get()
	getTeachers(): FindTeacherResponseDto[] {
		return (this.teacherserver.getTeachers());
	};

	@Get('/:teacherId')
	getTeacherById(
		@Param('teacherId') teacherId: string
	): FindTeacherResponseDto {
		return (this.teacherserver.getTeacherById(teacherId));
	}
}
