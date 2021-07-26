import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ReportAbuseStackNav from '../ReportAbuseStackNav';
import AboutReportAbuseScreen from '../../screens/AboutReportAbuseScreen';

const BottomTabs = createBottomTabNavigator();

export default function ReportAbuseTabNav({navigation}) {
    return (
        <BottomTabs.Navigator initialRoute="Report Abuse">
            <BottomTabs.Screen name="Report Abuse" component={ReportAbuseStackNav}/>
            <BottomTabs.Screen name="About" component={AboutReportAbuseScreen}/>
            
        </BottomTabs.Navigator>
    )
}