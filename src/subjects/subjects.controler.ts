import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { SubjectsService } from './subjects.service';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
  async create(@Body() subjectDto: any) {
    return this.subjectsService.create(subjectDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.subjectsService.findOne(id);
  }

  @Get('/with-lecturer')
  async findWithLecturer() {
    return this.subjectsService.findWithLecturer();
  }
}
