import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import LocaleContext from '../context/locale-context';
import { ListItemIcon, ListItemText } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
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
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={undefined}
        onClick={handleClick}
        sx={{
          textTransform: 'capitalize',
          fontWeight: 500,
        }}
      >
        <LanguageIcon locale={locale.currentLocale} withLabel={false} />
        { open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon /> }
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        { Array.isArray(languageMap) && languageMap.map((langue: Language) => (
          <MenuItem onClick={() => locale.changeLocale(langue.value)}>
            <ListItemIcon>
              <Image src={langue.icon} width={25} height={8} alt={langue.value } />
            </ListItemIcon>
            <ListItemText>
              { langue.label }
            </ListItemText>
          </MenuItem>
        ))}
      </Menu> 
    </>
  )
};

export default LanguageSwitcher;