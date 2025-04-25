import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { LEARNING } from "@/app/learning/learningUrls";

const MyServices = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={"bold"}>
        <FormattedMessage id="title.myServices"/>
      </Typography>
      <Typography pt={2}>
        <Link to={"/blog"}>
          <FormattedMessage id="link.blog" />
        </Link>
      </Typography>
      <Typography>
        <Link to={"/offers"}>
          <FormattedMessage id="link.offers" />
        </Link>
      </Typography>
      <Typography>
        <Link to={"/technologies"}>
          <FormattedMessage id="link.technologie" />
        </Link>
      </Typography>
      <Typography>
        <Link to={LEARNING}>
          <FormattedMessage id="link.learning" />
        </Link>
      </Typography>
      <Typography>
        <Link to={"/demo"}>
          <FormattedMessage id="link.demo" />
        </Link>
      </Typography>
    </Box>
  );
};

export default MyServices;