"use client";

import { createContext, useContext } from "react";

const AppContext = createContext({
  settings: null,
  homeData: null,
});

export function AppProvider({ children, settings, homeData }) {
  return (
    <AppContext.Provider
      value={{ settings: settings ?? null, homeData: homeData ?? null }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  return ctx ?? { settings: null, homeData: null };
}
