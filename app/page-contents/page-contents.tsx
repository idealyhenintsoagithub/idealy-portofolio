import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import AboutMe from "./about-me";
import Experience from "./experience";
import Technologie from "./technologie";
import Project from "./project";

const textBold = { fontWeight: 'bold' };

const PageContents = () => {
    return (
		<Box sx={{ pb: 10 }}>
      <AboutMe />
      <Experience />
      <Technologie />
      <Project />
		</Box>
	);
}

export default PageContents;