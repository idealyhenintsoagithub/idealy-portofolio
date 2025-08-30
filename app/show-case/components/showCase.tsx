"use client";

import { Box, CircularProgress, Grid, Paper, Typography } from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import LayoutWrapper from "@/app/layout-wrapper";
import ShowCaseItem from "./showCaseItem";
import { Link, useNavigate } from "react-router-dom";
import { PROJECT_DETAIL_PATH } from "@/app/project-detail/projectDetailUrl";
import { useGetProjectsQuery } from "@/core/services/project";
import Project from "@/core/models/project";

const ShowCase = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetProjectsQuery({});

  return (
  <LayoutWrapper>
    <Typography sx={{ textAlign: 'center', my: 3 }} variant="h4">
      <FormattedMessage id="showCase.title.pageTitle" />
    </Typography>
    {
      isLoading && (
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress />
        </Box>
      )
    }
    <Grid container>
      {
        data && data.map((project: Project) => (
          <Grid item xs={12} md={6} p={2}>
            <Box onClick={() => navigate(PROJECT_DETAIL_PATH.replaceAll(':projectTitle', String(project.name))) }>
              <ShowCaseItem item={project} />
            </Box>
          </Grid>
        ))
      }
    </Grid>
  </LayoutWrapper>
  );
};

export default ShowCase;