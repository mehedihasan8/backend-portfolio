import Experience, { TExperience } from './experience.model';

const createExperience = async (experience: TExperience) => {
  const newExperience = await Experience.create(experience);
  return newExperience;
};

const getAllExperience = async () => {
  const getExperience = await Experience.find();
  return getExperience;
};

const deleteExperience = async (id: string) => {
  await Experience.findByIdAndDelete(id);
  return { message: 'Experience deleted successfully!' };
};

const experienceServices = {
  createExperience,
  getAllExperience,
  deleteExperience,
};

export default experienceServices;
