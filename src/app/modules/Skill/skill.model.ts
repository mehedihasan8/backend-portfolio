import { Schema, model } from 'mongoose';

export type TSkill = {
  name: string;
  image: string;
};

const skillSchema = new Schema<TSkill>(
  {
    name: { type: String, required: [true, 'Name is required'] },

    image: { type: String, required: [true, 'Image is required'] },
  },
  {
    timestamps: true,
  },
);

const Skill = model<TSkill>('Skill', skillSchema);

export default Skill;
