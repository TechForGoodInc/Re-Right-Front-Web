import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabNav from './TabNavs/HomeTabNav';
import LoggedOutScreen from '../screens/LoggedOutScreen';
import ReachOutTabNav from './TabNavs/ReachOutTabNav';
import RecapRightsTabNav from './TabNavs/RecapRightsTabNav';
import ReportAbuseTabNav from './TabNavs/ReportAbuseTabNav';
import ResearchTabNav from './TabNavs/ResearchTabNav';
import ResearchStackNav from './ResearchStackNav';
import ProfileScreen from '../screens/HomeScreens/ProfileScreen';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

export default function HomeDrawerNav({navigation}) {
    return (
        <Drawer.Navigator initialRoute="Home">
            <Drawer.Screen name="Home" component={HomeTabNav}/>
            <Drawer.Screen name="Recap Rights" component={RecapRightsTabNav}/>
            <Drawer.Screen name="Report Abuse" component={ReportAbuseTabNav}/>
            <Drawer.Screen name="Reach Out" component={ReachOutTabNav}/>
            <Drawer.Screen name="Research Analytics" component={ResearchStackNav}/>
            <Drawer.Screen name="Profile" component={ProfileScreen}/>
            <Drawer.Screen name="Log Out" component={LoggedOutScreen}/>
        </Drawer.Navigator>
    )
}