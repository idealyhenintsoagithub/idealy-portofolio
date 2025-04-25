import { Box, useTheme } from "@mui/material";
import ContactMe from "@/app/contact/contact";
import FooterDetails from "./footer-detais";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      bgcolor: theme.palette.mode === 'dark' ? '#282828' : '#f0eded',
      position: 'relative',
      zIndex: 10,
      p: 3,
      height: "100vh",
      marginTop: "200px",
      minWidth: "100%",
    }}>
      <ContactMe />
      <FooterDetails />
    </Box>
  );
}

export default Footer;