import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ReportAbuseScreen1 from '../screens/ReportAbuseScreen1';
import RAScreen2 from '../screens/ReportAbuseScreen2';
import ReportRecapArticle from '../screens/ReportAbuseRecapArticle';
import ReportRecapQuiz from '../screens/ReportAbuseRecapQuiz';
import ReportRecapRightsScreen from '../screens/ReportAbuseRecapRightsScreen';


const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function ReportAbuseStackNav({navigation}) {
    const handleHamburgerPress = () => {
        navigation.openDrawer();
    }
    return (
        <Stack.Navigator initialRoute="Report Abuse" >
            <Stack.Screen name="Report Abuse" component={ReportAbuseScreen1}
                options={{title: "Report Abuse", headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../assets/HMIcon.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    )}} />
            <Stack.Screen name="Incident Info" component={RAScreen2} />
            <Stack.Screen name="Report RecapRightsScreen" component={ReportRecapRightsScreen} />
            <Stack.Screen name="Report RecapArticle" component={ReportRecapArticle} options = { ({route}) => ({title: route.params.title})} />  
            <Stack.Screen name="Report Human Rights Quiz" component={ReportRecapQuiz} />   
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