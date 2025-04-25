// '/images/api-platform.png',
//   '/images/symfony-1.png',
//   '/images/react.png',
//   '/images/sylius.png',
//   '/images/flutter.png',
//   '/images/nextjs.png',
//   '/images/bootstrap.png',
//   '/images/jquery.png',
//   '/images/git.png',
//   '/images/gitlab.png',
//   '/images/docker.png',
//   '/images/github.png',

export type Technologie = {
  id: number;
  name: string;
  website?: string;
  imageSrc: string;
  description?: string;
};

export const TECHNOLOGIES_MAPS: Technologie[] = [
  {
    id: 1,
    name: "Api-platform",
    website: "",
    imageSrc: "/images/api-platform.png",
  },
  {
    id: 2,
    name: "Symfony",
    website: "",
    imageSrc: "/images/symfony-1.png",
  },
  {
    id: 3,
    name: "React",
    website: "",
    imageSrc: "/images/react.png",

  },
  {
    id: 4,
    name: "Sylius",
    website: "",
    imageSrc: "/images/sylius.png",
  },
  {
    id: 5,
    name: "Flutter",
    website: "",
    imageSrc: "/images/flutter.png",
  },
  {
    id: 6,
    name: "NextJS",
    website: "",
    imageSrc: "/images/nextjs.png",
  },
  {
    id: 7,
    name: "Bootstrap",
    website: "",
    imageSrc: "/images/bootstrap.png",
  },
  {
    id: 8,
    name: "JQuery",
    website: "",
    imageSrc: "/images/jquery.png",
  },
  {
    id: 0,
    name: "Git",
    website: "",
    imageSrc: "/images/git.png",
  },
  {
    id: 10,
    name: "Gitlab",
    website: "",
    imageSrc: "/images/gitlab.png"
  },
  {
    id: 11,
    name: "Docker",
    website: "",
    imageSrc: "/images/docker.png",
  },
  {
    id: 12,
    name: "GitHub",
    website: "",
    imageSrc: "/images/github.png"
  },
];