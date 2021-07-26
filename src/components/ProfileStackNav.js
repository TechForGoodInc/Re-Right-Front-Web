import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/HomeScreens/ProfileScreen';
import AccountSettings from '../screens/HomeScreens/AccountSettingsScreen';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
const Stack = createStackNavigator();

const styles = StyleSheet.create({
    menuicon:{
        width: '200%',
        height: '100%'
    }
})



//somehow bring username here 
export default function ProfileStackNav({navigation}) {
    const goToAccountSettings = () => {
        navigation.navigate("Account");
    }
    return (
        <Stack.Navigator initialRoute="Profile" >
            <Stack.Screen name="Profile" component={ProfileScreen}
                options={{title: '@username', headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress= { () => {console.log('settings')} }>
                        <Image source={require('./../../assets/settings.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    )}} />
            <Stack.Screen name="Account" component={AccountSettings}/>
        </Stack.Navigator>
    )
}