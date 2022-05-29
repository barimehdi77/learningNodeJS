import { Injectable } from '@nestjs/common';
import { FindStudentResponseDto, StudentResponseDto, updateStudentDto } from 'src/student/dto/studnet.dto';
import { students, teachers } from '../db'
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
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

	getStudents(): FindStudentResponseDto[] {
		return this.students;
	}

	updateStudentByTeacherId(teacherid: string, studentid: string, data: updateStudentDto): StudentResponseDto {
		return (this.students.find( student => {
			return (student.id === studentid);
		}));
	}
}
