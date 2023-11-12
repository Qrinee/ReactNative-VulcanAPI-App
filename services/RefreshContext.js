import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useRefreshContext() {
  return useContext(AppContext);
}

export function RefreshProvider({ children }) {
  const [refresh, setRefresh] = useState(false);
  return (
    <AppContext.Provider value={{ refresh, setRefresh }}>
      {children}
    </AppContext.Provider>
  );
}
