import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNav from '../StackNavs/HomeStackNav';
import ProfileStackNav from '../StackNavs/ProfileStackNav';
import FriendsStackNav from '../StackNavs/FriendsStackNav';
import CreatePostStackNav from '../StackNavs/CreatePostStackNav';
import ChatStackNav from '../StackNavs/ChatStackNav';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import colors from '../../../config/colors';
import colorsTest from '../../../config/colorsTest';

import { AppStyles } from '../../../config/styles';


const BottomTabs = createBottomTabNavigator();
const TabStyle = AppStyles.TabStyle;
const TabLabelStyle = AppStyles.TabLabelStyle;

const closeCreatePost = () => {
    navigation.navigate('Home');
}
export default function HomeTabNav() {
    let Colors = colors;
    /*let Colors = {};
    if (Platform.OS === 'web') {
        Colors = colors;
    } else {
        Colors = colorsTest;
    } Can use a different color import based on a conditional (need to link up dark mode state)*/
    return (
        <BottomTabs.Navigator initialRoute="Home" tabBarOptions={{ 
            activeBackgroundColor: Colors.active_tab,
            inactiveBackgroundColor: Colors.inactive_tab,
            keyboardHidesTabBar: true,
            tabStyle: TabStyle,
            labelStyle: TabLabelStyle,
            showIcon: true,
            //showLabel: false,
        }}>
            <BottomTabs.Screen name="Home" component={HomeStackNav} options={{
                tabBarIcon: () => <AntDesign name="home" size={24} color="black" />
            }}/>
            <BottomTabs.Screen name="Chat" component={ChatStackNav} options={{
                tabBarIcon: () => <AntDesign name="wechat" size={24} color="black" />
            }}/>
            <BottomTabs.Screen name="Create Post" component={CreatePostStackNav}
                options={{title: "Create Post",
                    headerLeft : () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ closeCreatePost }>
                        <Image source={require('../../../assets/delete-button.png')} style = {{width:45, height: 45,resizeMode: "contain"}} />
                    </TouchableOpacity>),
                    tabBarIcon: () => <AntDesign name="pluscircleo" size={24} color="black" />}}/>
            <BottomTabs.Screen name="Friends" component={FriendsStackNav} options={{
                tabBarIcon: () => <FontAwesome5 name="user-friends" size={24} color="black" />
            }}/>
            <BottomTabs.Screen name="Profile" component={ProfileStackNav} options={{
                tabBarIcon: () => <FontAwesome5 name="user" size={24} color="black" />
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