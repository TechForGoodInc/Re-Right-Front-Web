import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import colors from '../../config/colors';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function HomeStackNav({navigation}) {
    return (
        <Stack.Navigator initialRoute="Home" >
            <Stack.Screen name="Home" component={HomeScreen}
                options={{title: "W E L C O M E", headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ navigation.openDrawer() }>
                        <Image source={require('../../assets/HMIcon.png')} style = {styles.menuicon} />
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