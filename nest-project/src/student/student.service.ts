import { Injectable } from '@nestjs/common';
import { students } from '../db'
import { CreateStudentDto, FindStudentResponseDto, updateStudentDto } from './dto/studnet.dto';

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
		this.studnets.push(data);
		return (this.studnets.find(student => {
			return (student.id === data.id);
		}));
	}

	updateStudent(studentId: string, data: updateStudentDto): updateStudentDto {
		let student: updateStudentDto =  this.studnets.find(student => {
			return (student.id === studentId);
		});
		student = data;
		return (student);
	}
}
