import { Injectable } from '@nestjs/common';
import { students } from '../db'
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, updateStudentDto } from './dto/studnet.dto';
import { v4 as uuid } from 'uuid';
import { FindTeacherResponseDto } from 'src/teacher/dto/teacher.dto';

@Injectable()
export class StudentService {
	private students = students;

	getStudents(): FindStudentResponseDto[] {
		return (this.students);
	}

	getStudentById(studentId: string): FindStudentResponseDto {
		return (this.students.find( student => {
			return (student.id === studentId);
		}));
	}

	createStudent(data: CreateStudentDto): StudentResponseDto {
		let newStudent = {
			id: uuid(),
			...data
		}
		this.students.push(newStudent);
		return (newStudent);
	}

	updateStudent(studentId: string, data: updateStudentDto): StudentResponseDto {
		let updatedstudent: StudentResponseDto;

		const updatedList = this.students.map( student => {
			if (student.id === studentId){
				updatedstudent = {
					id: studentId,
					...data
				}
				return updatedstudent;
			} else return student;
		});
		this.students = updatedList;

		return (updatedstudent);
	}

	getStudentByTeacherId(teacherId: string): FindStudentResponseDto[] {
		return this.students.filter( student => {
			return (student.teacher === teacherId)
		});
	}
}
