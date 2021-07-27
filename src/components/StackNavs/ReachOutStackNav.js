import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ReachOutScreen1 from '../../screens/ReachOutScreen1';
import ReachOutScreen2 from '../../screens/ReachOutScreen2';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function ReachOutStackNav({navigation}) {
    const handleHamburgerPress = () => {
        navigation.openDrawer();
    }
    return (
        <Stack.Navigator initialRoute="Reach Out" >
            <Stack.Screen name="Reach Out" component={ReachOutScreen1}
                options={{title: "Reach Out", headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../../assets/HMIcon.png')} style = {styles.menuicon} />
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