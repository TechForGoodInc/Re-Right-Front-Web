import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import ResearchScreen from '../screens/ResearchAnalyticsScreens/ResearchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapToolScreen from '../screens/ResearchAnalyticsScreens/MapToolScreen';
import SubmitSuggestionScreen from '../screens/ResearchAnalyticsScreens/SubmitSuggestionScreen';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function ResearchStackNav({navigation}) {
    const handleHamburgerPress = () => {
        navigation.openDrawer();
    }
    return (
        <Stack.Navigator initialRoute="Research Analytics" >
            <Stack.Screen name="Research Anayltics" component={ResearchScreen}
                options={{title: "Research Analytics", headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../assets/HMIcon.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    )}} />
            <Stack.Screen name="Map Tool" component={MapToolScreen}/>
            <Stack.Screen name="Submit Suggestion" component={SubmitSuggestionScreen}/>
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
