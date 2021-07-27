import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNav from '../StackNavs/HomeStackNav';
import ProfileStackNav from '../StackNavs/ProfileStackNav';
import FriendsStackNav from '../StackNavs/FriendsStackNav';
import CreatePostStackNav from '../StackNavs/CreatePostStackNav';
import ChatStackNav from '../StackNavs/ChatStackNav';
import ReachOutScreen2 from '../../screens/ReachOutScreen2';

const BottomTabs = createBottomTabNavigator();

export default function HomeTabNav() {
    return (
        <BottomTabs.Navigator initialRoute="Home">
            <BottomTabs.Screen name="Home" component={HomeStackNav}/>
            <BottomTabs.Screen name="Chat" component={ReachOutScreen2}/>
            <BottomTabs.Screen name="Create Post" component={CreatePostStackNav}/>
            <BottomTabs.Screen name="Friends" component={FriendsStackNav}/>
            <BottomTabs.Screen name="Profile" component={ProfileStackNav}/>
        </BottomTabs.Navigator>
    )
}