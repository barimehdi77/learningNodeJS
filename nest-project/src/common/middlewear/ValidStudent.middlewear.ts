import { HttpException, Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { students } from '../../db'


@Injectable()
export class ValidStudentMiddlewear implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		console.log("THis Middlewear Was Called");
		const StudentId = req.params.studentid;
		const StudentExist = students.some(student => {
			return (student.id === StudentId);
		});
		if (!StudentExist)
		{
			throw new HttpException("Student Not Found", 400);
		}
		next();
	}
}
