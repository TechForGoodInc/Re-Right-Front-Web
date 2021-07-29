import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoggedOutScreen from '../../screens/LoggedOutScreen';
import LoginScreen from '../../screens/LoginScreen';
import SignupScreen1 from '../../screens/SignupScreen1';
import SignupScreen2 from '../../screens/SignupScreen2';
import SignupScreen3 from '../../screens/SignupScreen3';
import SignupScreen4 from '../../screens/SignupScreen4';
import ForgotPassScreen1 from '../../screens/ForgotPassScreen1';
import ForgotPassScreen2 from '../../screens/ForgotPassScreen2';
import ForgotPassScreen3 from '../../screens/ForgotPassScreen3';
import ForgotPassScreen4 from '../../screens/ForgotPassScreen4';
import HomeDrawerNav from '../HomeDrawerNav'

import { AppStyles } from '../../../config/styles';
import StackHeaderBackImage from '../StackHeaderBackImage';

const StackHeaderStyle = AppStyles.StackHeaderStyle;
const StackTitleStyle = AppStyles.StackTitleStyle;
const StackBackTitleStyle = AppStyles.StackBackTitleStyle;

const Stack = createStackNavigator();

// The last entry, "Home", nests the HomeDrawerNav (hamburger menu) inside the project wide stack nav
export default function EntryStack() {
    return (
        <Stack.Navigator initialRoute="Logged Out" screenOptions={{
            headerStyle: StackHeaderStyle,
            headerTitleStyle: StackTitleStyle,
            headerBackImage: StackHeaderBackImage,
            headerBackTitleStyle: StackBackTitleStyle }}>
            <Stack.Screen name="Logged Out" component={LoggedOutScreen} options={{title: "",}} />
            <Stack.Screen name="Login" component={LoginScreen} options={{title: "",}} />
            <Stack.Screen name="Signup 1" component={SignupScreen1} options={{title: "",}} />
            <Stack.Screen name="Signup 2" component={SignupScreen2} options={{title: "",}} />
            <Stack.Screen name="Signup 3" component={SignupScreen3} options={{title: "",}} />
            <Stack.Screen name="Signup 4" component={SignupScreen4} options={{title: "",}} />
            <Stack.Screen name="Forgot Password 1" component={ForgotPassScreen1} options={{title: "1",}} />
            <Stack.Screen name="Forgot Password 2" component={ForgotPassScreen2} options={{title: "2",}} />
            <Stack.Screen name="Forgot Password 3" component={ForgotPassScreen3} options={{title: "Answer Security Questions",}} />
            <Stack.Screen name="Forgot Password 4" component={ForgotPassScreen4} options={{title: "4",}} />
            <Stack.Screen name="Home" component={HomeDrawerNav} options={{title: "",}} />
        </Stack.Navigator>
    )
}