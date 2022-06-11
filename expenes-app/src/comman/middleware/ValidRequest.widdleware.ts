import { HttpException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { Week } from "src/db";



@Injectable()
export class ValidRequestMiddleware implements NestMiddleware {
	use (req: Request, res: Response, next: NextFunction) {
		console.log(req.body);
		const Day = Week.find(day => {
			return (day.DayName === req.body.DayName);
		});
		if (!Day)
			throw new HttpException("You Can't reserve in This day", 400);
		if (req.body.ReservedTime !== 1 && req.body.ReservedTime !== 2 && req.body.ReservedTime !== 3)
			throw new HttpException("Reserved Time is Incorrect", 401)
		next();
	}
}

