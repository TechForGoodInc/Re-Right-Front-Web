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

const BottomTabs = createBottomTabNavigator();
const TabStyle = AppStyles.TabStyle;
const TabLabelStyle = AppStyles.TabLabelStyle;

export default function HomeTabNav() {
    const colors = global.isDarkModeEnabled? darkColors: color; 
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(global.isDarkModeEnabled);
    useEffect(() => {
        setIsDarkModeEnabled(global.isDarkModeEnabled);
        }, []);
    let Colors = colors;
    /*let Colors = {};
    if (Platform.OS === 'web') {
        Colors = colors;
    } else {
        Colors = colorsTest;
    } Can use a different color import based on a conditional (need to link up dark mode state)*/
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