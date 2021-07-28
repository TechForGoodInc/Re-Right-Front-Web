import React from 'react';
import { BottomTabBarHeightContext, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNav from '../StackNavs/HomeStackNav';
import ProfileStackNav from '../StackNavs/ProfileStackNav';
import FriendsStackNav from '../StackNavs/FriendsStackNav';
import CreatePostStackNav from '../StackNavs/CreatePostStackNav';
import ChatStackNav from '../StackNavs/ChatStackNav';
import ReachOutScreen2 from '../../screens/ReachOutScreen2';
import colors from '../../../config/colors';

const BottomTabs = createBottomTabNavigator();
const closeCreatePost = () => {
    navigation.navigate('Home');
}
export default function HomeTabNav() {
    return (
        <BottomTabs.Navigator initialRoute="Home" screenOptions={{
            
        }}>
            <BottomTabs.Screen name="Home" component={HomeStackNav}/>
            <BottomTabs.Screen name="Chat" component={ChatStackNav}/>
            <BottomTabs.Screen name="Create Post" component={CreatePostStackNav}
                options={{title: "Create Post", headerLeft : () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ closeCreatePost }>
                        <Image source={require('../../../assets/delete-button.png')} style = {{width:45, height: 45,resizeMode: "contain"}} />
                    </TouchableOpacity>
                    )}} options={{
                        tabBarVisible:false
                    }}/>
            <BottomTabs.Screen name="Friends" component={FriendsStackNav}/>
            <BottomTabs.Screen name="Profile" component={ProfileStackNav}/>
        </BottomTabs.Navigator>
    )
}