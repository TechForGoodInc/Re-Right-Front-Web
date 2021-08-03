import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import ProfileStackNav from '../StackNavs/ProfileStackNav';
import FriendsStackNav from '../StackNavs/FriendsStackNav';
import CreatePostStackNav from '../StackNavs/CreatePostStackNav';
import ChatStackNav from '../StackNavs/ChatStackNav';
import ResearchStackNav from '../StackNavs/ResearchStackNav';

import color from "../../../config/colors";
import darkColors from "../../../config/darkColors";
import '../../../config/global';

export default function ResearchTabNav({navigation}) {
    const colors = global.isDarkModeEnabled ? darkColors : color;
    const AppStyles = StyleSheet.create({
        StackHeaderStyle: { // Currently used by all stack navs
            backgroundColor: colors.background_stack_header,
            borderBottomColor: colors.border,
            borderBottomWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10,
            height: 50,
        },
        ProfileStackHeaderStyle: { // Not used currently, but we can customize individual stacks like this
            backgroundColor: colors.primary,
        },
        StackTitleStyle: {
            fontWeight: 'bold',
            letterSpacing: 0.25,
            fontSize: 20,
            color: colors.text_stack_title,
        },
        StackBackTitleStyle: {
            color: colors.text_stack_back_title,
        },
        TabStyle: {
            borderColor: colors.border,
            borderWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10,
        },
        TabLabelStyle: {
            fontWeight: 'bold',
            letterSpacing: 0.25,
            fontSize: 16,
            color: colors.text_tab_label, 
        },
        ScreenBackground: {
            backgroundColor: colors.background_screen,
            flex: 1,
            alignItems: 'center',
        }
    });
    const BottomTabs = createBottomTabNavigator();
    const TabStyle = AppStyles.TabStyle;
    const TabLabelStyle = AppStyles.TabLabelStyle;

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