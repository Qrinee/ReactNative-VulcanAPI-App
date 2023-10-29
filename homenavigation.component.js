import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';

import StartIcon from './assets/icons8-home-256.png';
import ZadaniaIcon from './assets/icons8-homework-64.png';
import TestyIcon from './assets/icons8-test-100.png';
import SredniaIcon from './assets/icons8-trophy-90.png';

import GradesScreen from './components/GradesScreen';
import HomesWorksScreen from './components/HomeWorksScreen';
import MessagesScreen from './components/MessagesScreen';
import TestsScreen from './components/TestsScreen';
import GroupChatScreen from './components/GroupChatScreen';

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();

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

const TabNavigatorComponent = () => (
  <TabNavigator tabBar={props => <BottomTabBar {...props} />}>
    <TabScreen name='Start' component={MessagesScreen} options={{ headerShown: false }} />
    <TabScreen name='Zadania' component={HomesWorksScreen} options={{ headerShown: false }} />
    <TabScreen name='Testy' component={TestsScreen} options={{ headerShown: false }} />
    <TabScreen name='Średnia' component={GradesScreen} options={{ headerShown: false }} />
  </TabNavigator>
);

export default function Home() {
  return (
    <TabNavigatorComponent />
  );
}
