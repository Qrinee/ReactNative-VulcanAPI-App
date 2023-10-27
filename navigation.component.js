import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import GradesScreen from './components/GradesScreen';
import HomesWorksScreen from './components/HomeWorksScreen';
import MessagesScreen from './components/MessagesScreen';
import TestsScreen from './components/TestsScreen';
import { Image } from 'react-native';

// Import your image files
import StartIcon from './assets/icons8-home-256.png'
import ZadaniaIcon from './assets/icons8-homework-64.png'
import TestyIcon from './assets/icons8-test-100.png'
import SredniaIcon from './assets/icons8-trophy-90.png'
const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title='Start' icon={() => <Image source={StartIcon} style={{ width: 24, height: 24 }} />} />
    <BottomNavigationTab title='Zadania' icon={() => <Image source={ZadaniaIcon} style={{ width: 24, height: 24 }} />} />
    <BottomNavigationTab title='Testy' icon={() => <Image source={TestyIcon} style={{ width: 24, height: 24 }} />} />
    <BottomNavigationTab title='Średnia' icon={() => <Image source={SredniaIcon} style={{ width: 24, height: 24 }} />} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Start' component={MessagesScreen} options={{ headerShown: false }} />
    <Screen name='Zadania' component={HomesWorksScreen} options={{ headerShown: false }} />
    <Screen name='Testy' component={TestsScreen} options={{ headerShown: false }} />
    <Screen name='Średnia' component={GradesScreen} options={{ headerShown: false }} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
