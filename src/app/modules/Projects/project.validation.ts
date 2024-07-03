import { z } from 'zod';

const createProjectValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    title: z.string({
      required_error: 'Title is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    tech: z.array(z.string()).min(1, {
      message: 'At least one technology is required',
    }),

    githubClient: z.string().optional(),
    githubServer: z.string().optional(),
    liveLink: z.string({
      required_error: 'Live link is required',
    }),
    image: z.string({
      required_error: 'Image is required',
    }),
  }),
});

const updateProjectValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    tech: z.array(z.string()).optional(),
    githubClient: z.string().optional(),
    githubServer: z.string().optional(),
    liveLink: z.string().optional(),
    image: z.string().optional(),
  }),
});

const ProjectValidations = {
  createProjectValidation,
  updateProjectValidation,
};

export default ProjectValidations;
