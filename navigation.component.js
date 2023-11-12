import {React} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GroupChatScreen from './screens/(logged-in)/GroupChatScreen';
import home from './homenavigation.component';
import LoginScreen from './screens/LoginScreen';
import CheckerScreen from './screens/CheckerScreen';
import ChatsScreen from './screens/(logged-in)/ChatsScreen';

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
