import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ResearchStackNav from './ResearchStackNav';
import HomeTabNav from './HomeTabNav';
import RecapRightsStackNav from './RecapRightsStackNav';
import ReachOutStackNav from './ReachOutStackNav';
import ReportAbuseStackNav from './ReportAbuseStackNav';
import LoggedOutScreen from '../screens/LoggedOutScreen';

const Drawer = createDrawerNavigator();

export default function HomeDrawerNav({navigation}) {
    return (
        <Drawer.Navigator initialRoute="Home">
            <Drawer.Screen name="Home" component={HomeTabNav}/>
            <Drawer.Screen name="Recap Rights" component={RecapRightsStackNav}/>
            <Drawer.Screen name="Report Abuse" component={ReportAbuseStackNav}/>
            <Drawer.Screen name="Reach Out" component={ReachOutStackNav}/>
            <Drawer.Screen name="Research Analytics" component={ResearchStackNav}/>
            <Drawer.Screen name="Log Out" component={LoggedOutScreen}/>
        </Drawer.Navigator>
    )
}