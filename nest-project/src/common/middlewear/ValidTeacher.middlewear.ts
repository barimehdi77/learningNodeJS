import { HttpException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction , Request, Response } from "express";
import { students, teachers } from '../../db'


@Injectable()
export class ValidTeacherMiddlewear implements NestMiddleware {
	use (req: Request, res: Response, next: NextFunction) {
		const teacherId = req.params.teacherid;
		const teacherExist = teachers.some( teacher => {
			return (teacher.id === teacherId);
		});
		if (!teacherExist)
		{
			throw new HttpException("Teacher not Found", 401);
		}
		const studentId = req.params.studentid;
		if (studentId)
		{
			const StudentExist = students.some( student => {
				return (student.id === studentId);
			});
			if (!StudentExist)
			{
				throw new HttpException("student Not Found", 402);
			}
		}
		next();
	}
}
