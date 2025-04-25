import { Box, Grid, Paper, Typography } from "@mui/material";
import { useMemo } from "react";
import { useIntl } from "react-intl";
import LayoutWrapper from "@/app/layout-wrapper";
import ShowCaseItem from "./showCaseItem";

const ShowCase = () => {
  const intl = useIntl();
  const projectFixture: Project[] = useMemo(() => ([
    {
      id: 1,
      title: intl.formatMessage({ id: 'Enjooyz' }),
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nisi similique debitis inventore voluptatibus laudantium qui reiciendis ipsam repellendus voluptate sint laboriosam culpa tempora aut, vel molestiae. Ipsam, ea molestiae.',
      type: 'webSite',
      image: {
        id: 1,
        name: 'enjooyz',
        src: '/images/projects/offers.png',
      },
    },
    {
      id: 1,
      title: intl.formatMessage({ id: 'Pickle.mg' }),
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nisi similique debitis inventore voluptatibus laudantium qui reiciendis ipsam repellendus voluptate sint laboriosam culpa tempora aut, vel molestiae. Ipsam, ea molestiae.',
      type: 'webSite',
      image: {
        id: 1,
        name: 'Pickle',
        src: '/images/projects/pickle.com.png',
      },
    },
    {
      id: 1,
      title: intl.formatMessage({ id: 'Admin pickle' }),
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nisi similique debitis inventore voluptatibus laudantium qui reiciendis ipsam repellendus voluptate sint laboriosam culpa tempora aut, vel molestiae. Ipsam, ea molestiae.',
      type: 'webSite',
      image: {
        id: 1,
        name: 'enjooyz',
        src: '/images/projects/pickle-admin.png',
      },
    },
    {
      id: 1,
      title: intl.formatMessage({ id: 'Pickle mobile' }),
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nisi similique debitis inventore voluptatibus laudantium qui reiciendis ipsam repellendus voluptate sint laboriosam culpa tempora aut, vel molestiae. Ipsam, ea molestiae.',
      type: 'mobileApp',
      image: {
        id: 1,
        name: 'enjooyz',
        src: '/images/projects/pickle-app.png',
      }
    }
  ]), []);

  return (
  <LayoutWrapper>
    <Grid container spacing={4}>
      {
        projectFixture.map((project: Project) => (
          <Grid item xs={6}>
            <ShowCaseItem item={project} />
          </Grid>
        ))
      }
    </Grid>
  </LayoutWrapper>
  );
};

export default ShowCase;