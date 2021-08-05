import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNav from '../StackNavs/HomeStackNav';
import ProfileStackNav from '../StackNavs/ProfileStackNav';
import FriendsStackNav from '../StackNavs/FriendsStackNav';
import CreatePostStackNav from '../StackNavs/CreatePostStackNav';
import ChatStackNav from '../StackNavs/ChatStackNav';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Platform, StyleSheet } from 'react-native';
  import '../../../config/global';
  import color from '../../../config/colors';
  import darkColors from '../../../config/darkColors';
import colorsTest from '../../../config/colorsTest';
import { AppStyles } from '../../../config/styles';
//this global file has the dark mode value
import '../../../config/global';
import { useEffect } from 'react';
import {Image} from 'react-native';

import { useEffect } from 'react';

export default function HomeTabNav() {
    const colors = global.isDarkModeEnabled? darkColors: color; 
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(global.isDarkModeEnabled);
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
    useEffect(() => {
        setIsDarkModeEnabled(global.isDarkModeEnabled);
        }, []);
    return (
        <BottomTabs.Navigator initialRoute="Home" 
            unmountOnBlur= {true}
            initialParams={{isItDark: isDarkModeEnabled}}
            params = {{ isItDark: isDarkModeEnabled }}
            tabBarOptions={{ 
            unmountOnBlur: true,
            keyboardHidesTabBar: true,
            tabStyle: TabStyle,
            labelStyle: TabLabelStyle,
            showIcon: true,
            showLabel: Platform.OS === 'web' ? true: false,
        }}>
            <BottomTabs.Screen name="Home" component={HomeStackNav} 
                initialParams={{isItDark: isDarkModeEnabled}}
                params = {{ isItDark: isDarkModeEnabled }}
                options={{   
                activeTintColor: colors.active_tab,
                inactiveTintColor: colors.background_screen, 
                unmountOnBlur: true,
                tabBarIcon: () => <Image style={{ tintColor: colors.inactive_tab, height: 28, width: 28}} source = {require('../../../assets/home.png')} />
            }}/>
            <BottomTabs.Screen name="Chat" component={ChatStackNav} options={{
                unmountOnBlur: true,
                activeTintColor: colors.active_tab,
                inactiveTintColor: colors.background_screen, 

                tabBarIcon: () => <AntDesign name="wechat" size = {28} />
            }}/>
            <BottomTabs.Screen name="Create Post" component={CreatePostStackNav}
                options={{title: "Create Post",
                    activeTintColor: colors.active_tab,
                    inactiveTintColor: colors.background_screen, 
                    unmountOnBlur: true,
                    tabBarIcon: () => <AntDesign name="pluscircleo"  size = {28}/>}}/>
            <BottomTabs.Screen name="Friends" component={FriendsStackNav} options={{
                unmountOnBlur: true,
                activeTintColor: colors.active_tab,
                inactiveTintColor: colors.background_screen, 
                tabBarIcon: () => <FontAwesome5 name="user-friends" size = {28} />
            }}/>
            <BottomTabs.Screen name="Profile" component={ProfileStackNav} options={{
                unmountOnBlur: true,
                activeTintColor: colors.active_tab,
                inactiveTintColor: colors.background_screen, 
                tabBarIcon: () => <FontAwesome5 name="user" size = {28} />
            }}/>
        </BottomTabs.Navigator>
    )
}
const styles = StyleSheet.create({
    menuicon: {
      width: 50,
      height: 50,
      resizeMode: "contain",
    },
  });