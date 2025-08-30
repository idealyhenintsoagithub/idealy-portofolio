"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const AboutMe = () => {
    return (
      <Box id="about" sx={{ mb: 4, }}>
          <FormattedMessage id="about" />
          <Typography sx={{ fontWeight: 'bold' }}><Link href='espai-web.com'></Link>espai-web agency</Typography>
      </Box>
    )
};

export default AboutMe;