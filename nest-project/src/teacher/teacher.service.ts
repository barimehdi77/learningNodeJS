import { Injectable } from '@nestjs/common';
import { FindStudentResponseDto, StudentResponseDto, updateStudentDto } from 'src/student/dto/studnet.dto';
import { StudentService } from 'src/student/student.service';
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

	updateStudentByTeacherId(teacherid: string, studentId: string, data: updateStudentDto): StudentResponseDto {
		let updatedstudent: StudentResponseDto;

		const updatedList = this.students.map( student => {
			if (student.id === studentId){
				updatedstudent = {
					...student,
					teacher: teacherid
				}
				return updatedstudent;
			} else return student;
		});
		this.students = updatedList;

		return (updatedstudent);
	}

}

