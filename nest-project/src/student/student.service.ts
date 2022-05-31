import { Injectable } from '@nestjs/common';
import { students } from '../db'
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, updateStudentDto } from './dto/studnet.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
	private studnets = students;

	getStudents(): FindStudentResponseDto[] {
		return (this.studnets);
	}

	getStudentById(studentId: string): FindStudentResponseDto {
		return (this.studnets.find( student => {
			return (student.id === studentId);
		}));
	}

	createStudent(data: CreateStudentDto): CreateStudentDto {
		let newStudent = {
			id: uuid(),
			...data
		}
		this.studnets.push(newStudent);
		return (newStudent);
	}

	updateStudent(studentId: string, data: updateStudentDto): StudentResponseDto {
		let updatedstudent: StudentResponseDto;

		const updatedList = this.studnets.map( student => {
			if (student.id === studentId){
				updatedstudent = {
					id: studentId,
					...data
				}
			} else return student;
		});
		this.studnets = updatedList;

		return (updatedstudent);
	}
}
