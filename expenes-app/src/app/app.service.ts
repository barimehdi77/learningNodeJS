import { Injectable } from "@nestjs/common";
import { Week } from "../db";
import { ReservaitonRequestDro, WeekResponseDto } from "./dto/app.dto";


@Injectable()
export class AppService {
	private week = Week;
	getWeek() : WeekResponseDto []{
		return (this.week);
	}

	// reserveTime(timeZone: number, data: ReservaitonRequestDro): ReservaitonRequestDro {
	// 	const Day =  this.week.find( day => {
	// 		return (day.DayName === data.DayName);
	// 	});
	// 	// if (!Day)
	// 	// 	return ();
	// }
}
