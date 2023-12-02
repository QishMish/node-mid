import { Schema } from 'mongoose';

export const studentSchema = new Schema({
  name: String,
  subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
});
