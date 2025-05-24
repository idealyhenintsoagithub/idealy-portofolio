import Document from './Document';

export interface Training {
  title: string;

  type?: string;

  description: string;

  coverPage?: Document;

  chapters?: Chapter[];

  duration?: number;
};
