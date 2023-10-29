import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [isDemo, setIsDemo] = useState(false);

  return (
    <AppContext.Provider value={{ isDemo, setIsDemo }}>
      {children}
    </AppContext.Provider>
  );
}
