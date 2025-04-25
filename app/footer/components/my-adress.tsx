import { Box, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

const MyAdress = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={"bold"}>
        <FormattedMessage id="title.myAdress"/>
      </Typography>
      <Typography pt={2} variant="h6">
        <FormattedMessage id="label.madagascar"/>
      </Typography>
      <Typography>
        <FormattedMessage id="text.myAdresse"/>
      </Typography>
    </Box>
  );
};

export default MyAdress;