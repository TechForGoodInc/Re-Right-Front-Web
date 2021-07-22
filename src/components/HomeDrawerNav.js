import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ResearchAnalyticsScreen from '../screens/ResearchScreen';
import HomeStackNav from '../components/HomeStackNav';
import ResearchStackNav from './ResearchStackNav';
import HomeTabNav from './HomeTabNav';

const Drawer = createDrawerNavigator();

export default function HomeDrawerNav({navigation}) {
    return (
        <Drawer.Navigator initialRoute="Home">
            <Drawer.Screen name="Home" component={HomeTabNav}/>
            <Drawer.Screen name="Research Analytics" component={ResearchStackNav}/>
        </Drawer.Navigator>
    )
}