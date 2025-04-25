import React, { useEffect, useRef, useState } from 'react';
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { FormattedMessage } from "react-intl";

const sx = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100vh',
};

const PresentationSm = () => {
  return (
    <Box
      sx={{ position: 'sticky', top: window.innerHeight / 3 }}
    >
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
      </Box>
    </Box>
  );
};

export default PresentationSm;
