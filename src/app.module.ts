import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectsModule } from './subjects/subjects.module';
import { LecturersModule } from './lecturers/lecturers.module';
import { subjectSchema } from './subjects/subjects.schema';
import { studentSchema } from './students/students.schema';
import { lecturerSchema } from './lecturers/lecturers.schema';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    LecturersModule,
    SubjectsModule,
    StudentsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/university'),
    MongooseModule.forFeature([
      { name: 'Subject', schema: subjectSchema },
      { name: 'Student', schema: studentSchema },
      { name: 'Lecturer', schema: lecturerSchema },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
