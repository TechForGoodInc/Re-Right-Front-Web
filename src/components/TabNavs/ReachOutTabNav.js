import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ReachOutStackNav from '../StackNavs/ReachOutStackNav';
import ProfileStackNav from '../StackNavs/ProfileStackNav';
import FriendsStackNav from '../StackNavs/FriendsStackNav';
import CreatePostStackNav from '../StackNavs/CreatePostStackNav';
import ChatStackNav from '../StackNavs/ChatStackNav';

const BottomTabs = createBottomTabNavigator();

export default function ReachOutTabNav({navigation}) {
    return (
        <BottomTabs.Navigator initialRoute="Reach Out">
            <BottomTabs.Screen name="Reach Out" component={ReachOutStackNav}/>
            <BottomTabs.Screen name="Chat" component={ChatStackNav}/>
            <BottomTabs.Screen name="Create Post" component={CreatePostStackNav}/>
            <BottomTabs.Screen name="Friends" component={FriendsStackNav}/>
            <BottomTabs.Screen name="Profile" component={ProfileStackNav}/>
        </BottomTabs.Navigator>
    )
}