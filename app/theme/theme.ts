import { createTheme } from '@mui/material/styles';

export const DarkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#2D2D2DD8',
        light: '#515151',
        dark: '#424242',
        contrastText: '#fff',
      },
      secondary: {
        main: '#F3F3F3',
        light: '#F5F5F5',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

export const LightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#FEFEFE',
        light: '#FFFFFF',
        dark: '#424242',
        contrastText: '#fff',
      },
      secondary: {
        main: '#F3F3F3',
        light: '#F5F5F5',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

