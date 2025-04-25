"use client"

import { createContext } from "react";

const LocaleContext = createContext({
  changeLocale: (selectedLocale?: string) => {},
  currentLocale: 'fr',
});

export default LocaleContext;