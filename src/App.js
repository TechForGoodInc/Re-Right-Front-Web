import 'react-native-gesture-handler';
import React, {Button} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoggedOutScreen from './screens/LoggedOutScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen1 from './screens/SignupScreens/SignupScreen1';
import SignupScreen2 from './screens/SignupScreens/SignupScreen2';
import SignupScreen3 from './screens/SignupScreens/SignupScreen3';
import SignupScreen4 from './screens/SignupScreens/SignupScreen4';
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
                <Stack.Screen name="Logged Out" component={LoggedOutScreen} options={{title: "",}} />
                <Stack.Screen name="Login" component={LoginScreen} options={{title: "",}} />
                <Stack.Screen name="Signup 1" component={SignupScreen1} options={{title: "",}} />
                <Stack.Screen name="Signup 2" component={SignupScreen2} options={{title: "",}} />
                <Stack.Screen name="Signup 3" component={SignupScreen3} options={{title: "",}} />
                <Stack.Screen name="Signup 4" component={SignupScreen4} options={{title: "",}} />
                <Stack.Screen name="Forgot Password 1" component={ForgotPassScreen1} options={{title: "",}} />
                <Stack.Screen name="Forgot Password 2" component={ForgotPassScreen2} options={{title: "",}} />
                <Stack.Screen name="Forgot Password 3" component={ForgotPassScreen3} options={{title: "",}} />
                <Stack.Screen name="Forgot Password 4" component={ForgotPassScreen4} options={{title: "",}} />
                <Stack.Screen name="Home" component={HomeDrawerNav} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}