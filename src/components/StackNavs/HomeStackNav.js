import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import HomeScreen from '../../screens/HomeScreens/HomeScreen';

import { AppStyles } from '../../../config/styles';
import '../../../config/global';
import StackHeaderBackImage from '../StackHeaderBackImage';

const StackHeaderStyle = AppStyles.StackHeaderStyle;
const StackTitleStyle = AppStyles.StackTitleStyle;
const StackBackTitleStyle = AppStyles.StackBackTitleStyle;

const Stack = createStackNavigator();

export default function HomeStackNav({route, navigation}) {
    const [{isItDark} , setIsItDark] = useState(route.params)
    useEffect(() => {
        setIsItDark(route.params);
        }, []);
    const handleHamburgerPress = () => {
        navigation.openDrawer();
    }
    return (
        <Stack.Navigator initialRoute="Home" 
            //passing the parameters to the home screen
            initialParams={{isItDark: isItDark}}
            initialParams={{isItDark: isItDark}}
            screenOptions={{
                unmountOnBlur: true,  
                headerStyle: StackHeaderStyle,
                headerTitleStyle: StackTitleStyle,
                headerBackImage: StackHeaderBackImage,
                headerBackTitleStyle: StackBackTitleStyle }}>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                initialParams={{ isItDark: isItDark}}
                initialParams={{isItDark: isItDark}}
                options={{title: "R E - R I G H T", unmountOnBlur: true, headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../../assets/HMIcon.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    )}} />
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