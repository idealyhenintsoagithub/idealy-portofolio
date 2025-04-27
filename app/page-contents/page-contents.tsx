import { Box, useTheme } from "@mui/material";
import AboutMe from "./about-me";
import Experience from "./experience";
import Technologie from "./technologie";
import Project from "./project";

const textBold = { fontWeight: 'bold' };

const PageContents = () => {
  const theme = useTheme();
  return (
    <Box sx={{ p: 4, bgcolor: theme.palette.background.default }}>
      <AboutMe />
      <Experience />
      <Technologie />
      <Project />
    </Box>
  );
}

export default PageContents;