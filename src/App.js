import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoggedOutScreen from './screens/LoggedOutScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import ForgotPassScreen1 from './screens/ForgotPassScreen1';
import ForgotPassScreen2 from './screens/ForgotPassScreen2';
import ForgotPassScreen3 from './screens/ForgotPassScreen3';
import ForgotPassScreen4 from './screens/ForgotPassScreen4';


const Stack = createStackNavigator();

export default function ReRightApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logged Out">
        <Stack.Screen
            name="Logged Out"
            component={LoggedOutScreen}
            options={{ title: "" }}
            />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            />
        <Stack.Screen
            name="Signup"
            component={SignupScreen}
            />
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            />
        <Stack.Screen
            name="Forgot Password 1"
            component={ForgotPassScreen1}
            />
        <Stack.Screen
            name="Forgot Password 2"
            component={ForgotPassScreen2}
            />
        <Stack.Screen
            name="Forgot Password 3"
            component={ForgotPassScreen3}
            />
        <Stack.Screen
            name="Forgot Password 4"
            component={ForgotPassScreen4}
            />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}