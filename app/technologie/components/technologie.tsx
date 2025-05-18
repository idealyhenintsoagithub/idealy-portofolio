import { Box, Button, Paper, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { Technologie, TECHNOLOGIES_MAPS } from "../constants/technologies";
import TechnologieInfo from "./technologie-info";

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
