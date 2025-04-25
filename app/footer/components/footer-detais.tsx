import { Box, Grid, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import MyServices from "./my-services";
import MyAdress from "./my-adress";
import ShowCase from "./show-case";

const FooterDetails = () => {
  return (
    <Grid container sx={{ mt: 10 }}>
      <Grid item xs={8}>
      </Grid>
      <Grid item xs={2}>
        <MyAdress/>
      </Grid>
      <Grid item xs={2}>
        <MyServices />
      </Grid>
      <Grid item xs={2}>
        <ShowCase />
      </Grid>
    </Grid>
  );
};

export default FooterDetails;