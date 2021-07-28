import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import PostPreview from '../../screens/HomeScreens/PostPreview';
import ProfileScreen from '../../screens/HomeScreens/ProfileScreen';
import AccountSettings from '../../screens/HomeScreens/AccountSettingsScreen';

import { AppStyles } from '../../../config/styles';

const StackHeaderStyle = AppStyles.StackHeaderStyle;
const StackTitleStyle = AppStyles.StackTitleStyle;
const Stack = createStackNavigator();

export default function ProfileStackNav({navigation}) {
    const handleHamburgerPress = () => {
        navigation.openDrawer();
    }
    const handleSettingsPress = () => {
        navigation.navigate('Account Settings')
    }
    return (
        <Stack.Navigator initialRoute="Profile" screenOptions={{
            headerStyle: StackHeaderStyle,
            headerTitleStyle: StackTitleStyle }}>
            <Stack.Screen name="Profile" component={ProfileScreen}
                options={{title: "Profile", headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../../assets/HMIcon.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    ), headerRight: () => (
                        <TouchableOpacity activeOpacity = { .5 } onPress={ handleSettingsPress }>
                        <Image source={require('../../../assets/settings.png')} style = {styles.settingsicon} />
                    </TouchableOpacity>
                    )}} />
        <Stack.Screen name="Account Settings" component={AccountSettings}/>
        <Stack.Screen name="Post" component={PostPreview}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    menuicon: {
      width: 50,
      height: 50,
      resizeMode: "contain",
    },
    settingsicon: {
      width: 38,
      height: 38,
      paddingRight: '130%',
      resizeMode: "contain"
    }
  });