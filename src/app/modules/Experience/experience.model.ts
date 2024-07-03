import { Schema, model } from 'mongoose';

export type TExperience = {
  name: string;
  type: string;
  duration: string;
  position: string;
  details: string;
};

const experienceSchema = new Schema<TExperience>(
  {
    name: { type: String, required: [true, 'Name is required'] },
    type: { type: String, required: [true, 'Type is required'] },
    duration: { type: String, required: [true, 'Duration is required'] },
    position: { type: String, required: [true, 'Position is required'] },
    details: { type: String, required: [true, 'Details is required'] },
  },
  {
    timestamps: true,
  },
);

const Experience = model<TExperience>('Experience', experienceSchema);

export default Experience;
