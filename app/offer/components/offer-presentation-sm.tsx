"use client";

import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

const OfferPresentationSm = () => (
  <Grid container>
    <Grid item lg={6}>
      <img
        src="/images/desk_workspace_2.jpg"
        alt="OfferPresentation"
        style={{
          borderRadius: "20px",
          width: '100%',
        }}
      />
    </Grid>
    <Grid item lg={6} sx={{ p: 2 }}>
      <Typography variant="h3">
        <FormattedMessage id="offer.title.pageTitle" />
      </Typography>
      <Typography sx={{ pt: 2 }}>
        <FormattedMessage id="offer.label.pageContent" />
      </Typography>
    </Grid>
  </Grid>
);

export default OfferPresentationSm;
