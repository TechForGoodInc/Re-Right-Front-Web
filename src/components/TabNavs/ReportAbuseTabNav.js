import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ReportAbuseStackNav from '../StackNavs/ReportAbuseStackNav';
import AboutReportAbuseScreen from '../../screens/ReportAbuseScreens/AboutReportAbuseScreen';

import { AppStyles } from '../../../config/styles';
import colors from '../../../config/colors';

const BottomTabs = createBottomTabNavigator();
const TabStyle = AppStyles.TabStyle;
const TabLabelStyle = AppStyles.TabLabelStyle;


export default function ReportAbuseTabNav({navigation}) {
    return (
        <BottomTabs.Navigator initialRoute="Report Abuse" tabBarOptions={{ 
            activeBackgroundColor: colors.active_tab,
            inactiveBackgroundColor: colors.inactive_tab,
            keyboardHidesTabBar: true,
            tabStyle: TabStyle,
            unmountOnBlur: true, 
            labelStyle: TabLabelStyle
        }}>
            <BottomTabs.Screen name="Report Abuse" component={ReportAbuseStackNav} options ={{ unmountOnBlur: true}}/>
            <BottomTabs.Screen name="About" component={AboutReportAbuseScreen} options ={{ unmountOnBlur: true}}/>

        </BottomTabs.Navigator>
    )
}