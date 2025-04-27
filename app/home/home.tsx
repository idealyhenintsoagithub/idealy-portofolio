import { useEffect, useState } from 'react';
import { styled, Theme, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Presentation from '../presentation/presentation';
import Navbar from './navbar';
import PageContents from '../page-contents/page-contents';
import LayoutWrapper from '../layout-wrapper';
import { useMediaQuery } from '@mui/material';
import PresentationSm from '../presentation/presentation-sm';

const firstSx = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 5,
};

const secondSx = {
  zIndex: 6,
  mt: '100vh',
};

const Home = () => {
  const theme = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

	return (
    <LayoutWrapper>
      <Grid container>
        <Grid md={6} sx={ isSmallScreen ? firstSx : {}}>
          { isSmallScreen ? (<PresentationSm />) :  (<Presentation />) }
        </Grid>
        <Grid md={6} sx={ isSmallScreen ? secondSx : {}}>
          <PageContents />
        </Grid>
      </Grid>
    </LayoutWrapper>
	);
}

export default Home;