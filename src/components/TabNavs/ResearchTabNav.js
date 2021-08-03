import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStackNav from '../StackNavs/ProfileStackNav';
import FriendsStackNav from '../StackNavs/FriendsStackNav';
import CreatePostStackNav from '../StackNavs/CreatePostStackNav';
import ChatStackNav from '../StackNavs/ChatStackNav';
import ResearchStackNav from '../StackNavs/ResearchStackNav';

import { AppStyles } from '../../../config/styles';
import colors from '../../../config/colors';

const BottomTabs = createBottomTabNavigator();
const TabStyle = AppStyles.TabStyle;
const TabLabelStyle = AppStyles.TabLabelStyle;

export default function ResearchTabNav({navigation}) {
    return (
        <BottomTabs.Navigator initialRoute="Research Analytics" tabBarOptions={{ 
            activeBackgroundColor: colors.active_tab,
            inactiveBackgroundColor: colors.inactive_tab,
            keyboardHidesTabBar: true,
            unmountOnBlur: true, 
            tabStyle: TabStyle,
            labelStyle: TabLabelStyle
        }}>
            <BottomTabs.Screen name="Research Analytics" component={ResearchStackNav} options ={{ unmountOnBlur: true}}/>
            <BottomTabs.Screen name="Chat" component={ChatStackNav} options ={{ unmountOnBlur: true}}/>
            <BottomTabs.Screen name="Create Post" component={CreatePostStackNav} options ={{ unmountOnBlur: true}}/>
            <BottomTabs.Screen name="Friends" component={FriendsStackNav} options ={{ unmountOnBlur: true}}/>
            <BottomTabs.Screen name="Profile" component={ProfileStackNav} options ={{ unmountOnBlur: true}}/>
        </BottomTabs.Navigator>
    )
}