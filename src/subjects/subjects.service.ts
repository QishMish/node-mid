import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel('Subject') private readonly subjectModel: Model<any>,
  ) {}

  async create(subjectDto: any) {
    const subject = new this.subjectModel(subjectDto);
    return subject.save();
  }

  async findOne(id: string) {
    return this.subjectModel
      .findById(id)
      .populate('lecturer')
      .populate('students')
      .exec();
  }

  async findAll() {
    return this.subjectModel.find().exec();
  }

  async findWithLecturer() {
    return this.subjectModel.find().populate('lecturer').exec();
  }
}
