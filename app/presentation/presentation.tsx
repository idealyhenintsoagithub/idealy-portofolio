"use client";

import { Box, Paper, Typography, useTheme } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FormattedMessage } from "react-intl";
import { useMemo } from "react";
import zIndex from "@mui/material/styles/zIndex";

const Presentation = () => {
  const theme = useTheme();
  const isSmall = theme.breakpoints.down("md");

  const sx = useMemo(() => {
    return {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      height: '80vh',
      justifyContent: 'space-between',
      textAlign: isSmall ? 'center' : 'left',
      mb: isSmall ? 4 : 0,
      width: 'inherit',
      zIndex: 5,
    };
  }, [isSmall, theme]);

	return (
    <Box sx={{ ...sx }}>
      <Box>
        <Typography variant="h3">
          <FormattedMessage id="salutation" />
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 700, py: 1 }}>
          <FormattedMessage id="me"/>
        </Typography>
        <Typography variant="h3">
          <FormattedMessage id="software.developper" />
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        <Box>
          <GitHubIcon />
        </Box>
        <Box>
          <FacebookOutlinedIcon />
        </Box>
        <Box>
          <LinkedInIcon />
        </Box>
        <Box>
          <XIcon />
        </Box>
      </Box>
    </Box>
	)
};

export default Presentation;