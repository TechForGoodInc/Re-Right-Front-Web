import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeTabNav from './TabNavs/HomeTabNav';
import ReachOutTabNav from './TabNavs/ReachOutTabNav';
import RecapRightsTabNav from './TabNavs/RecapRightsTabNav';
import ReportAbuseTabNav from './TabNavs/ReportAbuseTabNav';

import ResearchStackNav from './StackNavs/ResearchStackNav';
import ProfileStackNav from './StackNavs/ProfileStackNav';

import LoggedOutScreen from '../screens/LoggedOutScreen';

const Drawer = createDrawerNavigator();

export default function HomeDrawerNav({navigation}) {
    return (
        <Drawer.Navigator initialRoute="Home">
            <Drawer.Screen name="Home" component={HomeTabNav}/>
            <Drawer.Screen name="Recap Rights" component={RecapRightsTabNav}/>
            <Drawer.Screen name="Report Abuse" component={ReportAbuseTabNav}/>
            <Drawer.Screen name="Reach Out" component={ReachOutTabNav}/>
            <Drawer.Screen name="Research Analytics" component={ResearchStackNav}/>
            <Drawer.Screen name="Profile" component={ProfileStackNav}/>
            <Drawer.Screen name="Log Out" component={LoggedOutScreen}/>
        </Drawer.Navigator>
    )
}