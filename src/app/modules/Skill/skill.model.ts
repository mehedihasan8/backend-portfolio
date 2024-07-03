import { Schema, model } from 'mongoose';

export type TSkill = {
  name: string;
  percentage: string;
  stack: string;
};

const skillSchema = new Schema<TSkill>(
  {
    name: { type: String, required: true },
    percentage: { type: String, required: true },
    stack: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Skill = model<TSkill>('Skill', skillSchema);

export default Skill;
