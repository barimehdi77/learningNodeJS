export class WeekResponseDto {
	DayName: string;
	TimeZone: [
		{
			First: {
					start: number;
					end: number;
					isReserved: boolean;
					reserver: string;
			},
			Second:{
					start: number;
					end: number;
					isReserved: boolean;
					reserver: string;
			},
			Third: {
				start: number;
				end: number;
				isReserved: boolean;
				reserver: string;
			}
		}
	]
}
