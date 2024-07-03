import { Schema, model } from 'mongoose';
import { TProject } from './projects.type';

const projectSchema = new Schema<TProject>(
  {
    name: { type: String, required: [true, 'Name is required'] },
    title: { type: String, required: [true, 'Title is required'] },
    description: { type: String, required: [true, 'Description is required'] },
    tech: {
      type: [String],
      required: [true, 'At least one technology is required'],
      validate: {
        validator: (arr: string[]) => arr.length > 0,
        message: 'At least one technology is required',
      },
    },
    githubClient: { type: String },
    githubServer: { type: String },
    liveLink: { type: String, required: [true, 'Live link is required'] },
    image: { type: String, required: [true, 'Image is required'] },
  },
  {
    timestamps: true,
  },
);

const Project = model<TProject>('Project', projectSchema);

export default Project;
