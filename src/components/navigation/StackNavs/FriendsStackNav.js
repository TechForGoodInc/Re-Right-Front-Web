import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
// External imports above, internal imports below
import StackHeaderBackImage from '../StackHeaderBackImage';
import FriendsScreenNavWrapper from '../FriendsScreenNavWrapper';
import FriendProfileScreen from '../../../screens/HomeScreens/FriendProfileScreen';
import RecommendedFriendsScreen from '../../../screens/HomeScreens/RecommendedFriendsScreen';

import GetGlobalStyles from '../../../../config/GetGlobalStyles';
import color from "../../../../config/colors";
import darkColors from "../../../../config/darkColors";
import '../../../../config/global';

const Stack = createStackNavigator();

export default function FriendsStackNav({navigation}) {
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
        <Stack.Navigator initialRoute="Friends" screenOptions={{
            headerStyle: StackHeaderStyle,
            headerTitleStyle: StackTitleStyle,
            headerBackImage: StackHeaderBackImage,
            headerBackTitleStyle: StackBackTitleStyle }}>
            <Stack.Screen name="Friends" component={FriendsScreenNavWrapper} props={{navigation: navigation}}
                options={{title: "Friends", headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../../../assets/HMIcon.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    )}} />
            <Stack.Screen name="Recommended Friends" component={RecommendedFriendsScreen}
                options={{title: "Recommended Friends"}}/>
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