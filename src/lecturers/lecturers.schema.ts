import { Schema } from 'mongoose';

export const lecturerSchema = new Schema({
  name: String,
  subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
});
