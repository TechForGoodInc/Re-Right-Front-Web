import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStackNav from '../ProfileStackNav';
import FriendsStackNav from '../FriendsStackNav';
import CreatePostStackNav from '../CreatePostStackNav';
import ChatStackNav from '../ChatStackNav';
import ResearchStackNav from '../ResearchStackNav';

const BottomTabs = createBottomTabNavigator();

export default function ResearchTabNav({navigation}) {
    return (
        <BottomTabs.Navigator initialRoute="Research Analytics">
            <BottomTabs.Screen name="Research Analytics" component={ResearchStackNav}/>
            <BottomTabs.Screen name="Chat" component={ChatStackNav}/>
            <BottomTabs.Screen name="Create Post" component={CreatePostStackNav}/>
            <BottomTabs.Screen name="Friends" component={FriendsStackNav}/>
            <BottomTabs.Screen name="Profile" component={ProfileStackNav}/>
        </BottomTabs.Navigator>
    )
}