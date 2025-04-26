import { useTheme } from '@mui/material/styles';
import { Box, IconButton, Typography } from "@mui/material";
import React, { useMemo } from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import ColorModeContext from '../context/color-mode-context';
import LocaleContext from '../context/locale-context';
import LanguageSwitcher from './language-switcher';
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from 'react-router-dom';
import { TECHNOLOGIES_PATH } from '../technologie/routes';
import { OFFER_PATH } from '../offer/routes';
import { LEARNING } from '../learning/learningUrls';

type PageLink = {
  id: string,
  label: string;
  href: string;
}

const PageLinkAnchor = (props: PageLink) => {
  const { id, label, href } = props;

  return (
    <Typography sx={{
      minWidth: 100,
      textDecoration: 'none',
    }}>
      <Link to={href}>
          <FormattedMessage id={id} />
      </Link>
    </Typography>
  );
}

const Navbar = () => {
  const theme = useTheme();
  const intl = useIntl();
  const colorMode = React.useContext(ColorModeContext);
  const locale = React.useContext(LocaleContext);

  const linkMap: PageLink[] = useMemo(() => (
    [
      {
        id: 'navbar.about',
        label: 'About',
        href: '/#about',
      },
      {
        id: 'navbar.offer',
        label: intl.formatMessage({ id: 'navbar.offer' }),
        href: OFFER_PATH
      },
      {
        id: 'navbar.technology',
        label: 'Technologie',
        href: TECHNOLOGIES_PATH
      },
      {
        id: 'navbar.formation',
        label: intl.formatMessage({ id: 'navbar.formation' }),
        href: LEARNING
      },
      {
        id: 'navbar.project',
        label: 'Project',
        href: '/demo'
      },
    ]
  ), []);

	return (
		<>
			<Box sx={{
				display: 'flex',
				alignItems: 'center',
				textAlign: 'center',
				position: 'fixed',
				top: 0,
				minWidth: '100%',
				minHeight: 34,
				p: 2,
				justifyContent: 'flex-end',
        flexWrap: 'wrap-reverse',
        zIndex: 103,
        mb: 5,
        bgcolor: theme.palette.background.default,
			}}>
				{ linkMap.map((link: PageLink) => (
          <PageLinkAnchor
            id={link.id}
            label={link.label}
            href={link.href}
          />))}
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <BrightnessHighIcon /> : <Brightness4Icon />}
        </IconButton>
        <LanguageSwitcher />
			</Box>
		</>
	);
}

export default Navbar;