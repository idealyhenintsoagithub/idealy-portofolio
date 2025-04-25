import { Box, Grid, Paper, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

type webSiteProjectProps = {
    projects?: Project[];
};

const WebSiteProject = (props: webSiteProjectProps) => {
    const { projects } = props;

    if (!projects) {
        return null;
    }

  return (
    <>
      <Grid container>
        { projects.map((project: Project, index: number) => (
          <Grid item xs={6}>
            
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default WebSiteProject;