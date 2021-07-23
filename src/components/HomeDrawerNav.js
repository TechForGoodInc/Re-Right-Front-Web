import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabNav from './HomeTabNav';
import LoggedOutScreen from '../screens/LoggedOutScreen';
import ReachOutTabNav from './ReachOutTabNav';
import RecapRightsTabNav from './RecapRightsTabNav';
import ReportAbuseTabNav from './ReportAbuseTabNav copy';
import ResearchTabNav from './ResearchTabNav';

const Drawer = createDrawerNavigator();

export default function HomeDrawerNav({navigation}) {
    return (
        <Drawer.Navigator initialRoute="Home">
            <Drawer.Screen name="Home" component={HomeTabNav}/>
            <Drawer.Screen name="Recap Rights" component={RecapRightsTabNav}/>
            <Drawer.Screen name="Report Abuse" component={ReportAbuseTabNav}/>
            <Drawer.Screen name="Reach Out" component={ReachOutTabNav}/>
            <Drawer.Screen name="Research Analytics" component={ResearchTabNav}/>
            <Drawer.Screen name="Log Out" component={LoggedOutScreen}/>
        </Drawer.Navigator>
    )
}