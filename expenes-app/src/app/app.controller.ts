import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { Week } from '../db'
import { AppService } from "./app.service";
import { ReservaitonRequestDro, WeekResponseDto } from "./dto/app.dto";


@Controller()
export class AppController {
	constructor (private readonly appservice: AppService) {}
	@Get()
	getWeek() : WeekResponseDto[] {
		return (this.appservice.getWeek());
	}
	@Put('/')
	reserveTime(
		@Param('TimeZone') timeZone: number,
		@Body() data: ReservaitonRequestDro
	) : WeekResponseDto {
		return (this.appservice.reserveTime(timeZone, data));
	}
}
