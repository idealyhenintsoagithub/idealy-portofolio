import LayoutWrapper from "@/app/layout-wrapper";
import { useGetProjectByNameQuery } from "@/services/project";
import Chip from '@mui/material/Chip';
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const params = useParams();
  const projectName = params.projectTitle ?? undefined

  const { data: project, error, isLoading } = useGetProjectByNameQuery({
    name: projectName ?? '',
  }, { skip: !projectName });

  if (!project) {
    return;
  }

  return (
    <LayoutWrapper>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{ project.name }</Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Description</Typography>
      <Typography>{ project.description }</Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Technologies</Typography>
      {
        project.technologies.map((tech: string) => (<Chip label={tech} variant="outlined" sx={{ mr: 1, px: 1 }}/>))
      }
    </LayoutWrapper>
  );
};

export default ProjectDetail;
