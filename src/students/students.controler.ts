import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {
  }

  @Post('/')
  async create(@Body() studentDto: any) {
    return this.studentsService.create(studentDto);
  }

  @Get('/')
  async findAll() {
    return this.studentsService.findAll();
  }

  @Post('/select-subject')
  async selectSubject(@Body() selectSubjectDto) {
    return this.studentsService.selectSubject(selectSubjectDto);
  }

  @Get('/subjects:studentId')
  async findOne(@Param('studentId') id: string) {
    return this.studentsService.getSubjects(id);
  }
}
