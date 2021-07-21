import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import ResearchAnalyticsScreen from '../screens/ResearchAnalyticsScreen';

const Drawer = createDrawerNavigator();

export default function HomeDrawerNav() {
    return (
        <Drawer.Navigator initialRoute="Home">
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Research Analytics" component={ResearchAnalyticsScreen}/>
        </Drawer.Navigator>
    )
}