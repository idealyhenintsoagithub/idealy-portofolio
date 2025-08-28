"use client"
import { Inter } from "next/font/google";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Grid, Paper, ThemeProvider, Box } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import {IntlProvider } from 'react-intl';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
import ColorModeContext from "./context/color-mode-context";
import LocaleContext from "./context/locale-context";
import { DarkTheme, LightTheme } from "./theme/theme";
import Home from "./home/home";
import frMessages from "./i18n/messages.fr.json";
import enMessages from "./i18n/messages.en.json";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import "./styles/globals.css";
import Offer from "./offer/components/offer";
import { TECHNOLOGIES_PATH } from "./technologie/routes";
import { OFFER_PATH } from "./offer/routes";
import { SHOW_CASE_PATH } from "./show-case/showCaseUrl";
import ShowCase from "./show-case/components/showCase";
import LearningContainer from "./learning/components/learningContainer";
import { LEARNING } from "./learning/learningUrls";
import TechContainer from "./technologie/tech-container";
import { HOME_URL } from "./home/home-url";
import { PROJECT_BASE_PATH, PROJECT_DETAIL_PATH } from "./project-detail/projectDetailUrl";
import ProjectDetail from "./project-detail/components/projectDetail";
import { store } from './../store/store';
import { Provider } from 'react-redux';
import Cookies from 'js-cookie';

interface Props {
  readonly children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export function flattenMessages(nestedMessages: any, prefix = ''): { [key: string]: string } {
  if (nestedMessages === null) {
    return {};
  }

  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}

const App = () => {
  const [mode, setMode] = React.useState<string>('light');
  const [currentLocale, setCurrentLocale] = React.useState<string>('fr');
  const [messages, setMessages] = React.useState<any>(frMessages);
  const cookie = useRef<Record<string, any>>({});

  const colorMode = React.useMemo(() => ({
    toggleColorMode: () => {
      setMode((prev) => {
        const val = prev === 'light' ? 'dark' : 'light';
        Cookies.set('themeMode', val, { expires: 7 });
        return val;
      });
    },
  }), []);

  const localeMode = React.useMemo(() => ({
    currentLocale,
    changeLocale: (selectedLocale?: string) => {
      if (selectedLocale) {
        setCurrentLocale((previousLocale: string) => selectedLocale);
      } else {
        setCurrentLocale((previousLocale: string) => previousLocale === 'fr' ? 'en' : 'fr');
      }
      
      setMessages(selectedLocale === 'fr' ? frMessages : enMessages);
      Cookies.set('locale', selectedLocale ?? 'fr', { expires: 7 });
    },
  }), [currentLocale]);

  const flattenedMessages = useMemo(() => {
    return messages ? flattenMessages(messages) : {};
  }, [messages]);

  useEffect(() => {
    if (Cookies.get('locale')) {
      setMessages(Cookies.get('locale') === 'fr' ? frMessages : enMessages);
    }

    if (Cookies.get('themeMode')) {
      setMode(Cookies.get('themeMode') ?? 'light');
    }
  }, []);

  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Provider store={store}>
            <LocaleContext.Provider value={localeMode}>
              <ColorModeContext.Provider value={colorMode}>
                <IntlProvider messages={flattenedMessages} locale={currentLocale} defaultLocale="en">
                  <ThemeProvider theme={ mode == 'light' ? LightTheme : DarkTheme }>
                    <CssBaseline />
                    <Box sx={{ minHeight: "100dvh" }}>
                      <Routes>
                        <Route path={HOME_URL} element={(<Home />)} />
                        <Route path={`${TECHNOLOGIES_PATH}/*`} element={(<TechContainer />)} />
                        <Route path={OFFER_PATH} element={(<Offer />)} />
                        <Route path={SHOW_CASE_PATH} element={(<ShowCase />)} />
                        <Route path={`${LEARNING}/*`} element={(<LearningContainer />)} />
                        <Route path={`${PROJECT_DETAIL_PATH}`} element={(<ProjectDetail />)} />
                      </Routes>
                    </Box>
                  </ThemeProvider>
                </IntlProvider>
              </ColorModeContext.Provider>
            </LocaleContext.Provider>
          </Provider>
        </body>
      </html>
    </StoreProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);

export default function RootLayout() {
  return (<RouterProvider router={router} />)
}
