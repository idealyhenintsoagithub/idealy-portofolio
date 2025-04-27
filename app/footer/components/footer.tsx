import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import ContactMe from "@/app/contact/contact";
import FooterDetails from "./footer-detais";

const Footer = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid 
      container
      sx={{
        p: 4,
        bgcolor: theme.palette.grey[100],
        position: 'relative',
        zIndex: 6,
        minHeight: '100dvh',
        justifyContent: isSm ? 'center': 'unset',
      }}
    >
      <Grid item md={6}>
        <ContactMe />
      </Grid>
      <Grid item md={6} width={"100%"} >
        <FooterDetails />
      </Grid>
    </Grid>
  );
}

export default Footer;