import { Learning } from "@/app/model/learning";
import { Box, Grid, Paper, Typography } from "@mui/material";
import LearningItem from "./LearningItem";
import { FormattedMessage } from "react-intl";

const learningList: Learning[] = [
    {
        title: 'learning.symfony.title',
        description: 'learning.symfony.description',
        duration: '4',
        coverPage: {
          id: 1,
          src: '/images/symfony-1.png',
          name: 'Symfony',
        },
    },
    {
        title: 'learning.apiPlatform.title',
        description: 'learning.apiPlatform.description',
        duration: '2',
        coverPage: {
          id: 1,
          src: '/images/api-platform.png',
          name: 'Symfony',
        },
    },
    {
        title: 'learning.react.title',
        duration: '1',
        type: 'Web | Front-end',
        description: 'learning.react.description',
        coverPage: {
          id: 1,
          src: '/images/react.png',
          name: 'React',
        },
    },
    {
      title: 'learning.flutter.title',
      type: 'Mobile | Android',
      description: 'learning.flutter.description',
      duration: '2',
      coverPage: {
        id: 1,
        src: '/images/flutter.png',
        name: 'React',
      },
  }
];

const LearningList = () => {
  return (
    <>
      <Typography sx={{ textAlign: 'center', my: 3, }} variant="h4">
        <FormattedMessage id="formation.title.formations" />
      </Typography>
      <Grid container>
        {
          learningList.map((learning: Learning) => (
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