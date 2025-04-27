import { Box, useMediaQuery, useTheme } from "@mui/material";
import MyServices from "./my-services";
import MyAdress from "./my-adress";
import ShowCase from "./show-case";

const FooterDetails = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isSm ? 'space-evenly' : 'space-around',
        mt: isSm ? 5 : 0,
        width: '100%',
      }}
    >
      <MyServices />
      <MyAdress/>
    </Box>
  );
};

export default FooterDetails;
