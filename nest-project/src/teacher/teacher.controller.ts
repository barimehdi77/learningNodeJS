import { Controller, Get, Put, Param, Body } from "@nestjs/common";


@Controller('teachers')
export class TeachersController {
	@Get()
	getTeachers() {
		return ("Get All Teachers");
	};

	@Get('/:teacherId')
	getTeacherById(
		@Param('teacherId') teacherId: string
	) {
		return (`Get Data of teacher with id = ${teacherId}`);
	}

}
