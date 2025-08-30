"use client";

import LayoutWrapper from "@/app/layout-wrapper";
import { useGetProjectByNameQuery } from "@/core/services/project";
import Chip from '@mui/material/Chip';
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, Typography, useTheme } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useParams } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useCallback, useState } from "react";
import Document from "@/core/models/Document";

const ProjectDetail = () => {
  const params = useParams();
  const theme = useTheme();
  const projectName = params.projectTitle ?? undefined;
  const [openImage, setOpenImage] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Document | null>(null);

  const { data: project, error, isLoading } = useGetProjectByNameQuery({
    name: projectName ?? '',
  }, { skip: !projectName });

  const handleClose = useCallback(() => {
    setSelectedImage(null);
    setOpenImage(false);
  }, []);

  const handleImageSelection = useCallback((image: Document) => {
    setSelectedImage(image);
    setOpenImage(true)
  }, []);

  if (!project || isLoading) {
    return (
      <LayoutWrapper>
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress />
        </Box>
      </LayoutWrapper>
    );
  }

  return (
    <LayoutWrapper>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{ project.name }</Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', pt: 2, pb: 1 }}>Description</Typography>
      <Typography>{ project.description }</Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', pt: 2, pb: 1 }}>Technologies</Typography>
      {
        project.technologies.map((tech: string) => (<Chip label={tech} variant="outlined" sx={{ mr: 1, mb: 1, px: 1 }}/>))
      }
      <Typography variant="h6" sx={{ fontWeight: 'bold', pt: 2, pb: 1 }}>Galleries</Typography>
      <ImageList variant="woven" cols={3} gap={8}>
        {project && project.images.map((image: Document) => (
          <ImageListItem key={image.id}>
            <img
              src={`http://127.0.0.1:8000/${image.src}/${image.name}`}
              alt={image.alt}
              loading="lazy"
              onClick={() => handleImageSelection(image)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog
        fullScreen
        open={openImage}
        onClose={handleClose}
      >
        <DialogContent sx={{ p: 0 }}>
          {
            selectedImage && (
              <img
                src={`http://127.0.0.1:8000/${selectedImage.src}/${selectedImage.name}`}
                alt={selectedImage.alt}
                loading="lazy"
                width={'100%'}
              />
            )
          }
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => handleClose()}>Close</Button>
        </DialogActions>
      </Dialog>
    </LayoutWrapper>
  );
};

export default ProjectDetail;
