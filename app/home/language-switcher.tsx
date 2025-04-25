import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import LocaleContext from '../context/locale-context';
import { ListItemIcon, Typography } from '@mui/material';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import LanguageIcon from '../utils/language';

type Language = {
  value: string;
  label: string;
  icon: string;
};

const languageMap: Language[] = [
  {
    value: 'fr',
    label: 'Fr',
    icon: '/images/langues/france.jpg'
  },
  {
    value: 'en',
    label: 'En',
    icon: '/images/langues/uk.png'
  },
];

const LanguageSwitcher = () => {
  const locale = React.useContext(LocaleContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: theme.palette.mode === 'dark' ? 'white' : 'black',
          textTransform: 'capitalize',
          fontWeight: 500,
        }}
      >
        <LanguageIcon locale={locale.currentLocale} withLabel={true} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        { Array.isArray(languageMap) && languageMap.map((langue: Language) => (
          <MenuItem onClick={() => locale.changeLocale(langue.value)}>
            <ListItemIcon>
              <Image src={langue.icon} width={25} height={8} alt={langue.value } />
            </ListItemIcon>
            { langue.label }
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
};

export default LanguageSwitcher;