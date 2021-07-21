import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoggedOutScreen from '../screens/LoggedOutScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import ForgotPassScreen1 from '../screens/ForgotPassScreen1';
import ForgotPassScreen2 from '../screens/ForgotPassScreen2';
import ForgotPassScreen3 from '../screens/ForgotPassScreen3';
import ForgotPassScreen4 from '../screens/ForgotPassScreen4';

import HomeDrawerNav from './HomeDrawerNav'

const Stack = createStackNavigator();

// The last entry, "Home", nests the HomeDrawerNav (hamburger menu) inside the project wide stack nav
export default function EntryStack() {
    return (
        <Stack.Navigator initialRoute="Logged Out" >
                <Stack.Screen name="Logged Out" component={LoggedOutScreen} options={{title: "",}} />
                <Stack.Screen name="Login" component={LoginScreen} options={{title: "",}} />
                <Stack.Screen name="Signup" component={SignupScreen} options={{title: "",}} />
                <Stack.Screen name="Forgot Password 1" component={ForgotPassScreen1} options={{title: "",}} />
                <Stack.Screen name="Forgot Password 2" component={ForgotPassScreen2} options={{title: "",}} />
                <Stack.Screen name="Forgot Password 3" component={ForgotPassScreen3} options={{title: "",}} />
                <Stack.Screen name="Forgot Password 4" component={ForgotPassScreen4} options={{title: "",}} />
                <Stack.Screen name="Home" component={HomeDrawerNav} options={{title: "",}} />
            </Stack.Navigator>
    )
}