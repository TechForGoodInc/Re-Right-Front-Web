import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecapRightsStackNav from '../StackNavs/RecapRightsStackNav';
import RecapQuiz from '../../screens/RecapRightsScreens/RecapQuiz';

import { AppStyles } from '../../../config/styles';
import colors from '../../../config/colors';

const BottomTabs = createBottomTabNavigator();
const TabStyle = AppStyles.TabStyle;
const TabLabelStyle = AppStyles.TabLabelStyle;

export default function RecapRightsTabNav({navigation}) {
    return (
        <BottomTabs.Navigator initialRoute="Recap Rights" tabBarOptions={{ 
            activeBackgroundColor: colors.active_tab,
            inactiveBackgroundColor: colors.inactive_tab,
            keyboardHidesTabBar: true,
            tabStyle: TabStyle,
            labelStyle: TabLabelStyle
        }}>
            <BottomTabs.Screen name="Recap Rights" component={RecapRightsStackNav}/>
            <BottomTabs.Screen name="Quiz" component={RecapQuiz}/>
        </BottomTabs.Navigator>
    )
}