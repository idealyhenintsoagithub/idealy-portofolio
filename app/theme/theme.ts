import { createTheme, Theme } from '@mui/material/styles';

export const DarkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: 'rgba(255, 255, 255, 0.08)',
    },
    grey: {
      '100': '#4C4C4CFF',
    },
    primary: {
      main: '#8F00FF',
      light: '#515151',
      dark: '#424242',
      contrastText: '#fff',
    },
    // secondary: {
    //   main: '#black',
    //   light: '#black',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  },
});

export const LightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    grey: {
      100: '#F5F5F5',
    },
    primary: {
      main: '#8F00FF',
      light: '#FFFFFF',
      dark: '#424242',
      contrastText: '#fff',
    },
    // secondary: {
    //   main: '#F3F3F3',
    //   light: '#F5F5F5',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
    // background: {
    //   default: 'black',
    //   paper: 'black',
    // }
  },
});
