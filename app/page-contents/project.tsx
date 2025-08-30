"use client";

import { Box, Typography } from "@mui/material";
import { SectionTitle } from "../utils/title";
import { ReactNode } from "react";
import { useGetProjectsQuery } from "@/core/services/project";

export type CustomCardProps = {
  title: string;
  imageName?: string;
  content?: ReactNode | ReactNode[] | string 
};


const Project = () => {
  const { data: projects, error, isLoading } = useGetProjectsQuery({filters: {id: [1, 2]} });

  return (
    <Box id="project">
      <SectionTitle content={'Project successfully made'} />
    </Box>
  );
}

export default Project;
