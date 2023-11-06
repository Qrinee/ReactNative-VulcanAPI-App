import {React, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import MessagesScreen from './components/MessagesScreen';
import GroupChatScreen from './components/GroupChatScreen';
import home from './homenavigation.component';
import LoginScreen from './components/LoginScreen';
import { useState } from 'react/cjs/react.production.min';
import CheckerScreen from './components/CheckerScreen';
import ChatsScreen from './components/ChatsScreen';
import Chat from './components/Chat';


const Stack = createStackNavigator()



export const AppNavigator = () => {
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Checker'
        component={CheckerScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{headerShown: false}}
      />
        <Stack.Screen
          name="Home"
          component={home}
          options={{headerShown: false}}
        />
        <Stack.Screen 
            name="Chaty"
            component={ChatsScreen}
            options={{
              headerStyle: {
                backgroundColor: '#212b44',
              },
              headerTintColor: 'white'
            }}

        />
        <Stack.Screen 
          name='Wiadomości'
          component={GroupChatScreen}
          options={{
            headerStyle: {
              backgroundColor: '#212b44',
            },
            headerTintColor: 'white'
          }}
        />
    </Stack.Navigator>
  </NavigationContainer>
  )
};

export default AppNavigator;
