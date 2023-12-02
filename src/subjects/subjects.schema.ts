import { Schema } from 'mongoose';

export const subjectSchema = new Schema({
  name: String,
  lecturer: { type: Schema.Types.ObjectId, ref: 'Lecturer' },
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
});
