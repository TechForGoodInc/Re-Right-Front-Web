import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FriendsScreen from '../screens/HomeScreens/FriendsScreen';

const Stack = createStackNavigator();

export default function FriendsStackNav({navigation}) {
    return (
        <Stack.Navigator initialRoute="Friends" >
            <Stack.Screen name="Friends" component={FriendsScreen}/>
        </Stack.Navigator>
    )
}