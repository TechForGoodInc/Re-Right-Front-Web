import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ReachOutStackNav from '../ReachOutStackNav';
import ProfileStackNav from '../ProfileStackNav';
import FriendsStackNav from '../FriendsStackNav';
import CreatePostStackNav from '../CreatePostStackNav';
import ChatStackNav from '../ChatStackNav';

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