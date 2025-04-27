import { Box, Button, Paper, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { Technologie, TECHNOLOGIES_MAPS } from "../constants/technologies";
import Image from "next/image";
import { useNavigate } from "react-router-dom";
import { TECH_DETAILS } from "../routes";
import { useCallback, useState } from "react";
import TechnologieInfo from "./technologie-info";

const imageHeight = 150;
const imagewidth = 150;

const Technologies = () => (
  <Box>
    <Typography sx={{ textAlign: "center", my: 3 }} variant="h4" >
      <FormattedMessage id="technologie.title.solutionsProvided" />
    </Typography>
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
        {TECHNOLOGIES_MAPS.map((technologie: Technologie) => (
          <TechnologieInfo technologie={technologie} />
        ))}
      </Box>
  </Box>
);

export default Technologies;