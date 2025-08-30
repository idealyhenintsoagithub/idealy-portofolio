"use client";

import { Box, Grid, Paper, Typography } from "@mui/material";
import LearningItem from "./LearningItem";
import { FormattedMessage } from "react-intl";
import { useGetTrainingQuery } from "@/core/services/training";
import { Training } from "@/core/models/training";

const LearningList = () => {
  const { data: Trainings, error, isLoading } = useGetTrainingQuery({});

  return (
    <>
      <Typography sx={{ textAlign: 'center', my: 3, }} variant="h4">
        <FormattedMessage id="formation.title.formations" />
      </Typography>
      <Grid container>
        {
          Trainings && Trainings.map((learning: Training) => (
            <Grid item xs={12} md={6} p={2}>
              <LearningItem item={learning} />
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}

export default LearningList;