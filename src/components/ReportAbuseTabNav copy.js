import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStackNav from './ProfileStackNav';
import FriendsStackNav from './FriendsStackNav';
import CreatePostStackNav from './CreatePostStackNav';
import ChatStackNav from './ChatStackNav';
import ReportAbuseStackNav from './ReportAbuseStackNav';

const BottomTabs = createBottomTabNavigator();

export default function ReportAbuseTabNav({navigation}) {
    return (
        <BottomTabs.Navigator initialRoute="Report Abuse">
            <BottomTabs.Screen name="Report Abuse" component={ReportAbuseStackNav}/>
            <BottomTabs.Screen name="Chat" component={ChatStackNav}/>
            <BottomTabs.Screen name="Create Post" component={CreatePostStackNav}/>
            <BottomTabs.Screen name="Friends" component={FriendsStackNav}/>
            <BottomTabs.Screen name="Profile" component={ProfileStackNav}/>
        </BottomTabs.Navigator>
    )
}