import { Controller, Post, Body } from '@nestjs/common';
import { LecturersService } from './lecturers.service';

@Controller('lecturers')
export class LecturersController {
  constructor(private readonly lecturersService: LecturersService) {}

  @Post('/')
  async create(@Body() lecturerDto: any) {
    return this.lecturersService.create(lecturerDto);
  }

  @Post('/select-subject')
  async selectSubject(@Body() selectSubjectDto) {
    return this.lecturersService.selectSubject(selectSubjectDto);
  }
}
