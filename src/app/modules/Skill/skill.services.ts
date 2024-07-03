import Skill, { TSkill } from './skill.model';

const createSkill = async (skill: TSkill) => {
  const newSkill = await Skill.create(skill);
  return newSkill;
};

const getAllSkill = async () => {
  const getFrontendSkill = await Skill.find({ stack: 'frontend' });
  const getBackendSkill = await Skill.find({ stack: 'backend' });
  return { getFrontendSkill, getBackendSkill };
};

const deleteSkill = async (id: string) => {
  await Skill.findByIdAndDelete(id);
  return { message: 'Project deleted successfully!' };
};

const skillServices = {
  createSkill,
  getAllSkill,
  deleteSkill,
};

export default skillServices;
