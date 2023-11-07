import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component';
import { ThemeContext } from './theme-context';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { BaseUrlProvider } from './components/BaseUrlContext';
import { UserInfoProvider } from './components/UserInfoContext';
import * as encoding from 'text-encoding';
import { RefreshProvider } from './components/RefreshContext';
export default () => {
  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <>

    <RefreshProvider>
    <UserInfoProvider>
    <BaseUrlProvider>

      <StatusBar style='light' />
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack}/>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          <View style={{ flex: 1, backgroundColor: 'black' }}>
            <ApplicationProvider {...eva} theme={eva.dark}>
              <AppNavigator/>
            </ApplicationProvider>
          </View>
        </ThemeContext.Provider>
      </React.Fragment>
      </BaseUrlProvider>
      </UserInfoProvider>
      </RefreshProvider>
    </>
  );
};
