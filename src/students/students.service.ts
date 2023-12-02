import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<any>,
  ) {}

  async create(studentDto: any) {
    const student = new this.studentModel(studentDto);
    return student.save();
  }

  async findAll() {
    return this.studentModel.find().exec();
  }

  async getSubjects(studentId: string) {
    const student = await this.studentModel
      .findById(studentId)
      .populate('subjects');

    if (!student) {
      throw new NotFoundException({ message: 'Students Not Found' });
    }
    return student;
  }

  async selectSubject(selectSubjectDto: any) {
    const { lecturerId, subjectId } = selectSubjectDto;

    const lecturer = await this.studentModel.findById(lecturerId);
    if (!lecturer) {
      throw new NotFoundException({ message: 'Lecturer Not Found' });
    }

    const subject = await this.studentModel.findById(subjectId);
    if (!subject) {
      throw new NotFoundException({ message: 'Subject Not Found' });
    }

    lecturer.subjects.push(subject);

    await lecturer.save();
  }
}
