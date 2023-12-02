import { Module } from '@nestjs/common';
import { StudentsController } from './students.controler';
import { StudentsService } from './students.service';
import { MongooseModule } from '@nestjs/mongoose';
import { studentSchema } from './students.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Student', schema: studentSchema }]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [StudentsService],
})
export class StudentsModule {}
