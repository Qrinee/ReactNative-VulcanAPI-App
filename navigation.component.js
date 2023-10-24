import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import GradesScreen from './components/GradesScreen'
import HomesWorksScreen from './components/HomeWorksScreen'
import MessagesScreen from './components/MessagesScreen';
import TestsScreen from './components/TestsScreen';

const { Navigator, Screen } = createBottomTabNavigator();



const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Start'/>
    <BottomNavigationTab title='Zadania'/>
    <BottomNavigationTab title='Testy'/>
    <BottomNavigationTab title='Średnia'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Start' component={MessagesScreen} options={{headerShown: false}}   />
    <Screen name='Zadania' component={HomesWorksScreen} options={{headerShown: false}}/>
    <Screen name='Testy' component={TestsScreen} options={{headerShown: false}}/>
    <Screen name='Średnia' component={GradesScreen} options={{headerShown: false}}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);