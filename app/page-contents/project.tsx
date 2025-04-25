import { Box, Typography } from "@mui/material";
import { SectionTitle } from "../utils/title";
import CustomCard from "../utils/custom-card";
import Image from "next/image";
import { ReactNode } from "react";

export type CustomCardProps = {
  title: string;
  imageName?: string;
  content?: ReactNode | ReactNode[] | string 
};

const projects: CustomCardProps[] = [
  {
    title: 'crm-novexa',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, assumenda quo autem tenetur obcaecati quasi consectetur officia quis odit suscipit vitae amet voluptatum quia magni eos sunt ducimus, quidem quas. ',
  },
  {
    title: 'bbat.pro',
    imageName: 'bbat.png',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, assumenda quo autem tenetur obcaecati quasi consectetur officia quis odit suscipit vitae amet voluptatum quia magni eos sunt ducimus, quidem quas. ',
  }
];

const Project = () => {
  return (
    <Box id="project">
      <SectionTitle content={'Project successfully made'} />
      {
        projects && projects.map((project: CustomCardProps) => (
          <CustomCard
              title={project.title}
              imageName={project.imageName}
              content={project.content}
            />
        ))
      }
    </Box>
  );
}

export default Project;