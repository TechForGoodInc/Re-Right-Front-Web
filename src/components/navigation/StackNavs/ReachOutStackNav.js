import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
// External imports above, internal imports below
import StackHeaderBackImage from '../StackHeaderBackImage';
import ReachOutScreen1 from '../../../screens/ReachOutScreens/ReachOutScreen1';
import ReachOutScreen2 from '../../../screens/ReachOutScreens/ReachOutScreen2';

import GetGlobalStyles from '../../../../config/GetGlobalStyles';
import color from '../../../../config/colors';
import darkColors from '../../../../config/darkColors';
import '../../../../config/global';

const Stack = createStackNavigator();

export default function ReachOutStackNav({navigation}) {
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

    const handleHamburgerPress = () => {
        navigation.openDrawer();
    }
    return (
        <Stack.Navigator initialRoute="Reach Out" screenOptions={{
            headerStyle: StackHeaderStyle,
            headerTitleStyle: StackTitleStyle,
            headerBackImage: StackHeaderBackImage,
            headerBackTitleStyle: StackBackTitleStyle }}>
            <Stack.Screen name="Reach Out" component={ReachOutScreen1}
                options={{title: "Reach Out", headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../../../assets/HMIcon.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    )}} />
            <Stack.Screen name="Chats" component={ReachOutScreen2}/>  
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