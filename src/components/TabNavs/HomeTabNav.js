import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNav from '../StackNavs/HomeStackNav';
import ProfileStackNav from '../StackNavs/ProfileStackNav';
import FriendsStackNav from '../StackNavs/FriendsStackNav';
import CreatePostStackNav from '../StackNavs/CreatePostStackNav';
import ChatStackNav from '../StackNavs/ChatStackNav';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Platform, StyleSheet,Image } from 'react-native';
import color from "../../../config/colors";
import darkColors from "../../../config/darkColors";
import '../../../config/global';
import GetSignUp1Style from '../../../config/SignUp1Css';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

export default function HomeTabNav() {
    const colors = global.isDarkModeEnabled ? darkColors : color;
    const { landscape } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    //styles are in a sperate folder 
    const [styles,setStyles] = useState(StyleSheet.create( 
        GetSignUp1Style(landscape, width, height) 
    ));
    if (landscape || width > height ){
        () => {
        setStyles(StyleSheet.create( 
            GetSignUp1Style(landscape, width, height) 
        ))
    }} 
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(global.isDarkModeEnabled);
    const BottomTabs = createBottomTabNavigator();
    const TabStyle = styles.TabStyle;
    const TabLabelStyle = styles.TabLabelStyle;
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