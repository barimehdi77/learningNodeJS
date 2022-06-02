import { Injectable } from '@nestjs/common';
import { FindStudentResponseDto, StudentResponseDto, updateStudentDto } from 'src/student/dto/studnet.dto';
import { StudentService } from 'src/student/student.service';
import { students, teachers } from '../db'
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
	constructor (private readonly studentService: StudentService) {};
	private teachers = teachers;
	private students = students;

	getTeachers(): FindTeacherResponseDto[] {
		return (this.teachers);
	}

	getTeacherById(teacherId: string): FindTeacherResponseDto {
		return (this.teachers.find(teacher => {
			return (teacher.id === teacherId);
		}));
	}

	updateStudentByTeacherId(teacherid: string, studentId: string, data: updateStudentDto): StudentResponseDto {
		const studentOfTeacher = this.studentService.getStudentByTeacherId(teacherid);

		const std = studentOfTeacher.find(student => {
			return (student.id === studentId);
		});

		std.id = data.id;
		std.name = data.name;
		std.teacher = data.teacher;
		return (std);
	}
}
