import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component';
import { ThemeContext } from './theme-context';
import { View } from 'react-native';

export default () => {
  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <>
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
    </>
  );
};
