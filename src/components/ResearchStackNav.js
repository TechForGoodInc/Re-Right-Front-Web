import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ResearchAnalyticsScreen from '../screens/ResearchScreen';

const Stack = createStackNavigator();

export default function ResearchStackNav({navigation}) {
    return (
        <Stack.Navigator initialRoute="Research Analytics" >
            <Stack.Screen name="Research Anayltics" component={ResearchAnalyticsScreen}
                options={{title: "Research Analytics", headerLeft: () => (
                    <Button title="=" onPress={() => navigation.openDrawer()}/>)}} />
        </Stack.Navigator>
    )
}