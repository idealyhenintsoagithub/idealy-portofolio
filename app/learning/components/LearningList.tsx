import { Learning } from "@/app/model/learning";
import { Box, Grid, Paper, Typography } from "@mui/material";
import LearningItem from "./LearningItem";
import { FormattedMessage } from "react-intl";

const learningList: Learning[] = [
    {
        title: 'Initier à Symfony',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nisi similique debitis inventore voluptatibus laudantium qui reiciendis ipsam repellendus voluptate sint laboriosam culpa tempora aut, vel molestiae. Ipsam, ea molestiae.',
        coverPage: {
          id: 1,
          src: '/images/symfony-1.png',
          name: 'Symfony',
        },
    },
    {
        title: 'Boster vôtre web avec Api-platform',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nisi similique debitis inventore voluptatibus laudantium qui reiciendis ipsam repellendus voluptate sint laboriosam culpa tempora aut, vel molestiae. Ipsam, ea molestiae.',
        coverPage: {
          id: 1,
          src: '/images/api-platform.png',
          name: 'Symfony',
        },
    },
    {
        title: 'React',
        type: 'Web | Front-end',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nisi similique debitis inventore voluptatibus laudantium qui reiciendis ipsam repellendus voluptate sint laboriosam culpa tempora aut, vel molestiae. Ipsam, ea molestiae.',
        coverPage: {
          id: 1,
          src: '/images/react.png',
          name: 'React',
        },
    },
    {
      title: 'Flutter',
      type: 'Mobile | Android',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nisi similique debitis inventore voluptatibus laudantium qui reiciendis ipsam repellendus voluptate sint laboriosam culpa tempora aut, vel molestiae. Ipsam, ea molestiae.',
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
      <Typography sx={{ textAlign: 'center', py: 4 }} variant="h4">
        <FormattedMessage id="formation.title.formations" />
      </Typography>
      <Grid container>
        {
          learningList.map((learning: Learning) => (
            <Grid item xs={6} p={2}>
              <LearningItem item={learning} />
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}

export default LearningList;