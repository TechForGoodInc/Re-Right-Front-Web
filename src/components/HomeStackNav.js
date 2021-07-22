import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function HomeStackNav({navigation}) {
    return (
        <Stack.Navigator initialRoute="Home" >
            <Stack.Screen name="Home" component={HomeScreen}
                options={{title: "Uwu 2.0 :)", headerLeft: () => (
                    <Button title="=" onPress={() => navigation.openDrawer()}/>)}} />
        </Stack.Navigator>
    )
}