import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useBaseUrlContext() {
  return useContext(AppContext);
}

export function BaseUrlProvider({ children }) {
  const [url, setUrl] = useState('http://146.59.44.77:5000');

  return (
    <AppContext.Provider value={{ url, setUrl }}>
      {children}
    </AppContext.Provider>
  );
}
