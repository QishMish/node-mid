import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LecturersService {
  constructor(
    @InjectModel('Lecturer') private readonly lecturerModel: Model<any>,
  ) {}

  async create(lecturerDto: any) {
    const lecturer = new this.lecturerModel(lecturerDto);
    return lecturer.save();
  }

  async selectSubject(selectSubjectDto: any) {
    const { lecturerId, subjectId } = selectSubjectDto;

    const lecturer = await this.lecturerModel.findById(lecturerId);
    if (!lecturer) {
      throw new NotFoundException({ message: 'Lecturer Not Found' });
    }

    const subject = await this.lecturerModel.findById(subjectId);
    if (!subject) {
      throw new NotFoundException({ message: 'Subject Not Found' });
    }

    lecturer.subjects.push(subject);

    await lecturer.save();
  }
}
