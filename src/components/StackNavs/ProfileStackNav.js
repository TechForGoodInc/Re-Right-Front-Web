import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PostPreview from '../../screens/HomeScreens/PostPreview';
import ProfileScreen from '../../screens/HomeScreens/ProfileScreen';
import AccountSettings from '../../screens/HomeScreens/AccountSettingsScreen';
import ChangeUsernameScreen from '../../screens/HomeScreens/ChangeUsernameScreen';
import ChangePasswordScreen from '../../screens/HomeScreens/ChangePasswordScreen';
import ChangeEmailScreen from '../../screens/HomeScreens/ChangeEmailScreen';
import SignupScreen4 from '../../screens/SignupScreens/SignupScreen4';
import StackHeaderBackImage from '../StackHeaderBackImage';

import color from "../../../config/colors";
import darkColors from "../../../config/darkColors";
import '../../../config/global';

const Stack = createStackNavigator();

export default function ProfileStackNav({navigation}) {
    const colors = global.isDarkModeEnabled ? darkColors : color;
    const AppStyles = StyleSheet.create({
        StackHeaderStyle: { // Currently used by all stack navs
            backgroundColor: colors.background_stack_header,
            borderBottomColor: colors.border,
            borderBottomWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10,
            height: 50,
        },
        ProfileStackHeaderStyle: { // Not used currently, but we can customize individual stacks like this
            backgroundColor: colors.primary,
        },
        StackTitleStyle: {
            fontWeight: 'bold',
            letterSpacing: 0.25,
            fontSize: 20,
            color: colors.text_stack_title,
        },
        StackBackTitleStyle: {
            color: colors.text_stack_back_title,
        },
        TabStyle: {
            borderColor: colors.border,
            borderWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10,
        },
        TabLabelStyle: {
            fontWeight: 'bold',
            letterSpacing: 0.25,
            fontSize: 16,
            color: colors.text_tab_label, 
        },
        ScreenBackground: {
            backgroundColor: colors.background_screen,
            flex: 1,
            alignItems: 'center',
        }
    });
    const StackHeaderStyle = AppStyles.StackHeaderStyle;
    const StackTitleStyle = AppStyles.StackTitleStyle;
    const StackBackTitleStyle = AppStyles.StackBackTitleStyle;

    const handleHamburgerPress = () => {
        navigation.openDrawer();
    }
    const handleSettingsPress = () => {
        navigation.navigate('Account Settings');
    }
    return (
        <Stack.Navigator detachPreviousScreen= {true} initialRoute="Profile" screenOptions={{
            headerStyle: StackHeaderStyle,
            headerTitleStyle: StackTitleStyle,
            headerBackImage: StackHeaderBackImage,
            headerBackTitleStyle: StackBackTitleStyle }}>
        <Stack.Screen name="Profile" component={ProfileScreen}
                options={{title: "Profile",headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../../assets/HMIcon.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    ), headerRight: () => (
                        <TouchableOpacity activeOpacity = { .5 } onPress={ handleSettingsPress }>
                        <Image source={require('../../../assets/settings.png')} style = {styles.settingsicon} />
                    </TouchableOpacity>
                    )}} />
        <Stack.Screen detachInactiveScreens = { true} detachPreviousScreen= {true}  options={{detachPreviousScreen: true}} name="Account Settings" component={AccountSettings}/>
        <Stack.Screen name="Post" component={PostPreview}/>
        <Stack.Screen name="ChangeUserName" component={ChangeUsernameScreen}/>
        <Stack.Screen name="ChangeEmail" component={ChangeEmailScreen}/>
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen}/>
        <Stack.Screen name="Social Media Tracking" component={SignupScreen4}/>
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