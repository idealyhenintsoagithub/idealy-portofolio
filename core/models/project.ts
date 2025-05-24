import Document from './Document';

type Project = {
  id: number;

  name: string;

  description: string;

  type: string;

  technologies: string[];

  presentationImage: Document;

  images: Document[];
};

export default Project;
