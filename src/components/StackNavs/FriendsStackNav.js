import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import FriendsScreen from '../../screens/HomeScreens/FriendsScreen';

import { AppStyles } from '../../../config/styles';
import StackHeaderBackImage from '../StackHeaderBackImage';
import FriendProfileScreen from '../../screens/HomeScreens/FriendProfileScreen';
import '../../../config/global';
const StackHeaderStyle = AppStyles.StackHeaderStyle;
const StackTitleStyle = AppStyles.StackTitleStyle;
const StackBackTitleStyle = AppStyles.StackBackTitleStyle;

const Stack = createStackNavigator();

export default function FriendsStackNav({navigation}) {
    const handleHamburgerPress = () => {
        navigation.openDrawer();
    }
    return (
        <Stack.Navigator initialRoute="Friends" screenOptions={{
            headerStyle: StackHeaderStyle,
            headerTitleStyle: StackTitleStyle,
            headerBackImage: StackHeaderBackImage,
            headerBackTitleStyle: StackBackTitleStyle }}>
            <Stack.Screen name="Friends" component={FriendsScreen}
                options={{title: "Friends", headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../../assets/HMIcon.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    )}} />
            <Stack.Screen name="Friend Profile" component={FriendProfileScreen}
                options={{title: "Friends Name"}}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    menuicon: {
      width: 50,
      height: 50,
      resizeMode: "contain",
    },
  });