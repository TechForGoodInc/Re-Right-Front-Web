import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/HomeScreens/ProfileScreen';

const Stack = createStackNavigator();

export default function ProfileStackNav({navigation}) {
    return (
        <Stack.Navigator initialRoute="Profile" >
            <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
    )
}