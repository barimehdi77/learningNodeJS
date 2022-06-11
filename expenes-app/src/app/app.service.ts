import { Injectable } from "@nestjs/common";
import { Week } from "../db";
import { ReservaitonRequestDro, WeekResponseDto } from "./dto/app.dto";


@Injectable()
export class AppService {
	private week = Week;
	getWeek() : WeekResponseDto []{
		return (this.week);
	}

	reserveTime(timeZone: number, data: ReservaitonRequestDro): WeekResponseDto {
		const Day =  this.week.find( day => {
			return (day.DayName === data.DayName);
		});
		Day.TimeZone[data.ReservedTime].isReserved = true;
		Day.TimeZone[data.ReservedTime].reserver = data.Reserver;
		return Day;
	}
}
