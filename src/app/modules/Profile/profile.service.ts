import Blog from '../Blog/blog.model';
import Project from '../Projects/projects.model';
import Skill from '../Skill/skill.model';
import Profile from './profile.model';
import { TProfile } from './profile.type';

const updateProfile = async (id: string, profile: TProfile) => {
  return await Profile.findByIdAndUpdate(id, profile, { new: true });
};

const getProfile = async () => {
  const blog = await Blog.countDocuments();
  const skill = await Skill.countDocuments();
  const project = await Project.countDocuments();
  await Profile.findOne();

  return {
    blog,
    skill,
    project,
  };
};

const ProfileServices = {
  updateProfile,
  getProfile,
};

export default ProfileServices;
