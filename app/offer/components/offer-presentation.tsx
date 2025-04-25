import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

const OfferPresentation = () => {
  return (
    <Box sx={{ mb: 5 }}>
      <Grid container>
        <Grid item xs={6} sx={{ px: 2 }}>
          <Typography variant="h3">
            <FormattedMessage id="offer.title.pageTitle" />
          </Typography>
          <Typography sx={{ pt: 2 }}>
            <FormattedMessage id="offer.label.pageContent" />
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Image
            src="/images/desk_workspace_2.jpg"
            width={600}
            height={300}
            alt="OfferPresentation"
            style={{
              borderRadius: "20px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default OfferPresentation;