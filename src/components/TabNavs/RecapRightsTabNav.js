import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import RecapRightsStackNav from '../StackNavs/RecapRightsStackNav';
import RecapQuiz from '../../screens/RecapRightsScreens/RecapQuiz';

import color from "../../../config/colors";
import darkColors from "../../../config/darkColors";
import '../../../config/global';

export default function RecapRightsTabNav({navigation}) {
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
        <BottomTabs.Navigator initialRoute="Recap Rights" tabBarOptions={{ 
            activeBackgroundColor: colors.active_tab,
            inactiveBackgroundColor: colors.inactive_tab,
            unmountOnBlur: true, 
            keyboardHidesTabBar: true,
            tabStyle: TabStyle,
            labelStyle: TabLabelStyle
        }}>
            <BottomTabs.Screen name="Recap Rights" component={RecapRightsStackNav} options={{
                unmountOnBlur: true,  tabBarIcon: () => <FontAwesome name="book" size={24} color="black" />
            }}/>
            <BottomTabs.Screen name="Quiz" component={RecapQuiz} options={{
                 unmountOnBlur: true,   tabBarIcon: () => <MaterialCommunityIcons name="brain" size={24} color="black" />
            }}/>
        </BottomTabs.Navigator>
    )
}