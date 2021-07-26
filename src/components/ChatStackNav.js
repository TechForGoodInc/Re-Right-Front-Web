//Chat Page
import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '../screens/HomeScreens/ChatScreen';
const Stack = createStackNavigator();

export default function ChatStackNav({navigation}) {
  return (
    <Stack.Navigator initialRoute="Chat" >
        <Stack.Screen name="Chat" component={ChatScreen}/>
    </Stack.Navigator>
)
}




