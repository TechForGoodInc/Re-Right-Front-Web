import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CreatePostScreen from '../screens/CreatePostScreen';
import FriendsScreen from '../screens/FriendsScreen';
import HomeScreen from '../screens/HomeScreen';
import HomeStackNav from './HomeStackNav';

const BottomTabs = createBottomTabNavigator();

export default function HomeTabNav() {
    return (
        <BottomTabs.Navigator initialRoute="Home">
            <BottomTabs.Screen name="Home" component={HomeStackNav}/>
            <BottomTabs.Screen name="Create Post" component={CreatePostScreen}/>
            <BottomTabs.Screen name="Friends" component={FriendsScreen}/>
        </BottomTabs.Navigator>
    )
}