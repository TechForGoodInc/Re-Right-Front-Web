import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
// External imports above, internal imports below
import StackHeaderBackImage from '../StackHeaderBackImage';
import HomeScreen from '../../../screens/HomeScreens/HomeScreen';

import GetGlobalStyles from '../../../../config/GetGlobalStyles';
import color from "../../../../config/colors";
import darkColors from "../../../../config/darkColors";
import '../../../../config/global';

const Stack = createStackNavigator();

export default function HomeStackNav({route, navigation}) {
    const colors = global.isDarkModeEnabled ? darkColors : color;
    const { landscape } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    //styles are in a sperate folder 
    const [styles,setStyles] = useState(StyleSheet.create( 
        GetGlobalStyles(landscape, width, height) 
    ));
    if (landscape || width > height ){
        () => {
        setStyles(StyleSheet.create( 
            GetGlobalStyles(landscape, width, height) 
        ))
    }} 
    const StackHeaderStyle = styles.StackHeaderStyle;
    const StackTitleStyle = styles.StackTitleStyle;
    const StackBackTitleStyle = styles.StackBackTitleStyle;
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
                        <Image source={require('../../../../assets/HMIcon.png')} style = {styles.menuicon} />
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