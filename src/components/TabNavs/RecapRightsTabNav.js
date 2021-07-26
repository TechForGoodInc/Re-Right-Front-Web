import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStackNav from '../ProfileStackNav';
import FriendsStackNav from '../FriendsStackNav';
import CreatePostStackNav from '../CreatePostStackNav';
import ChatStackNav from '../ChatStackNav';
import RecapRightsStackNav from '../RecapRightsStackNav';

const BottomTabs = createBottomTabNavigator();

export default function RecapRightsTabNav({navigation}) {
    return (
        <BottomTabs.Navigator initialRoute="Recap Rights">
            <BottomTabs.Screen name="Recap Rights" component={RecapRightsStackNav}/>
            <BottomTabs.Screen name="Chat" component={ChatStackNav}/>
            <BottomTabs.Screen name="Create Post" component={CreatePostStackNav}/>
            <BottomTabs.Screen name="Friends" component={FriendsStackNav}/>
            <BottomTabs.Screen name="Profile" component={ProfileStackNav}/>
        </BottomTabs.Navigator>
    )
}