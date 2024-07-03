// projects.type.ts
export type TProject = {
  name: string;
  title: string;
  description: string;
  tech: string[];
  githubClient?: string;
  githubServer?: string;
  liveLink: string;
  image: string;
};
