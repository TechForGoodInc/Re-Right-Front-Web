import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import CreatePostScreen from '../../screens/HomeScreens/CreatePostScreen';
import DevicePostScreen from '../../screens/HomeScreens/DevicePostScreen';
import TextPostScreen from '../../screens/HomeScreens/TextPostScreen';
import StylizedPostScreen from '../../screens/HomeScreens/StylizedPostScreen';

import { AppStyles } from '../../../config/styles';

const StackHeaderStyle = AppStyles.StackHeaderStyle;
const Stack = createStackNavigator();

export default function CreatePostStackNav({navigation}) {
    const handleHamburgerPress = () => {
        navigation.navigate('Home');
    }
    return (
        <Stack.Navigator initialRoute="Create Post" screenOptions={{ headerStyle: StackHeaderStyle }}>
            <Stack.Screen name="Create Post" component={CreatePostScreen}
                options={{title: "Create Post", headerRight: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../../assets/cross-round.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    )}} />
             <Stack.Screen name="Create Stylized Post" component={StylizedPostScreen}/>
             <Stack.Screen name="Create Text-Only Post" component={TextPostScreen}/>
             <Stack.Screen name="Choose From Device" component={DevicePostScreen}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    menuicon: {
      width: 30,
      height: 30,
      resizeMode: "contain",
      marginRight: 10
    },
  });