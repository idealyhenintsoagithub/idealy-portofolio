"use client"

import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useMemo } from "react";
import { Grid, Paper, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';
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
import Blog from "./blog/components/blog";
import LayoutWrapper from "./layout-wrapper";
import Technologies from "./technologie/components/technologie";
import Offer from "./offer/components/offer";
import { TECHNOLOGIES_PATH } from "./technologie/routes";
import { OFFER_PATH } from "./offer/routes";
import { SHOW_CASE_PATH } from "./show-case/showCaseUrl";
import ShowCase from "./show-case/components/showCase";
import LearningContainer from "./learning/components/learningContainer";
import { LEARNING } from "./learning/learningUrls";
import TechContainer from "./technologie/tech-container";
import AdminContainer from "./admin/admin-container";
import { ADMIN_PATH } from "./admin/admin-url";

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
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const [currentLocale, setCurrentLocale] = React.useState<string>('fr');
  const [messages, setMessages] = React.useState<any>(frMessages);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: string) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const localeMode = React.useMemo(() => ({
    currentLocale,
    changeLocale: (selectedLocale?: string) => {
      if (selectedLocale) {
        setCurrentLocale((previousLocale: string) => selectedLocale);
      } else {
        setCurrentLocale((previousLocale: string) => previousLocale === 'fr' ? 'en' : 'fr');
      }
      
      setMessages(selectedLocale === 'fr' ? frMessages : enMessages);
    },
  }), [currentLocale]);

  const flattenedMessages = useMemo(() => {
    return messages ? flattenMessages(messages) : {};
  }, [messages]);

  return (
    <StoreProvider>
      <html lang="en">
        <body>
        <LocaleContext.Provider value={localeMode}>
          <ColorModeContext.Provider value={colorMode}>
            <IntlProvider messages={flattenedMessages} locale={currentLocale} defaultLocale="en">
              <ThemeProvider theme={mode === 'dark' ? DarkTheme : LightTheme}>
                <Paper sx={{ minHeight: "100vh" }}>
                  <Routes>
                    <Route path="/" element={(<Home />)} />
                    <Route path="/blog" element={(<Blog />)} />
                    <Route
                      path={`${TECHNOLOGIES_PATH}/*`}
                      element={(<TechContainer />)
                    }/>
                    <Route path={OFFER_PATH} element={(<Offer />)} />
                    <Route path={SHOW_CASE_PATH} element={(<ShowCase />)} />
                    <Route path={`${LEARNING}/*`} element={(<LearningContainer />)} />
                    <Route path={`${ADMIN_PATH}/*`} element={(<AdminContainer />)} />
                  </Routes>
                </Paper>
              </ThemeProvider>
            </IntlProvider>
          </ColorModeContext.Provider>
        </LocaleContext.Provider>
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
