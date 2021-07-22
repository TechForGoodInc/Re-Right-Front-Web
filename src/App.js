import 'react-native-gesture-handler';
import React, {Button} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoggedOutScreen from './screens/LoggedOutScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgotPassScreen1 from './screens/ForgotPassScreen1';
import ForgotPassScreen2 from './screens/ForgotPassScreen2';
import ForgotPassScreen3 from './screens/ForgotPassScreen3';
import ForgotPassScreen4 from './screens/ForgotPassScreen4';
import HomeDrawerNav from './components/HomeDrawerNav';

const Stack = createStackNavigator();
export default function ReRightApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRoute="Logged Out" >
                <Stack.Screen name="Logged Out" component={LoggedOutScreen} options={{title: "About Re-Right",}} />
                <Stack.Screen name="Login" component={LoginScreen} options={{title: "Login",}} />
                <Stack.Screen name="Signup" component={SignupScreen} options={{title: "Signup",}} />
                <Stack.Screen name="Forgot Password 1" component={ForgotPassScreen1} options={{title: "Forgot Password",}} />
                <Stack.Screen name="Forgot Password 2" component={ForgotPassScreen2} options={{title: "Forgot Password"}} />
                <Stack.Screen name="Forgot Password 3" component={ForgotPassScreen3} options={{title: "Forgot Password"}} />
                <Stack.Screen name="Forgot Password 4" component={ForgotPassScreen4} options={{title: "Forgot Password"}} />
                <Stack.Screen name="Home" component={HomeDrawerNav} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}