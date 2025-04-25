import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { SectionTitle } from "../utils/title";
import { FormattedMessage } from "react-intl";

const imageHeight = 100;
const imagewidth = 100;

const imageMap = [
  '/images/api-platform.png',
  '/images/symfony-1.png',
  '/images/react.png',
  '/images/sylius.png',
  '/images/flutter.png',
  '/images/nextjs.png',
  '/images/bootstrap.png',
  '/images/jquery.png',
  '/images/git.png',
  '/images/gitlab.png',
  '/images/docker.png',
  '/images/github.png',
];

const Technologie = () => {
  return (
    <Box id="contact" sx={{ mb: 4, }}>
        <SectionTitle content={(
          <FormattedMessage id="technology.title"/>
        )}/>
        <Typography> <FormattedMessage id="technology.summary" /></Typography>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {imageMap.map((image) => (
            <Box sx={{ p: 2, my: 2, mx: 1, bgcolor: 'white' }}>
              <Image src={image} width={imagewidth} height={imageHeight} alt={image} />
            </Box>
          ))}
        </Box>
    </Box>
  );
}

export default Technologie;