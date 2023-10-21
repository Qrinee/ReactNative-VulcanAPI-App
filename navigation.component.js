import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import GradesScreen from './components/GradesScreen'
import HomesWorksScreen from './components/HomeWorksScreen'
import MessagesScreen from './components/MessagesScreen';
import TestsScreen from './components/TestsScreen';

const { Navigator, Screen } = createBottomTabNavigator();


const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Wiadomości'/>
    <BottomNavigationTab title='Zadania'/>
    <BottomNavigationTab title='Średnia'/>
    <BottomNavigationTab title='Testy'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Wiadomości' component={MessagesScreen} />
    <Screen name='Zadania' component={HomesWorksScreen}/>
    <Screen name='Średnia' component={GradesScreen}/>
    <Screen name='Testy' component={TestsScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);