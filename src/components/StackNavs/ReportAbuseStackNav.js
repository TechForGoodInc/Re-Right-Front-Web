import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import ReportAbuseScreen1 from '../../screens/ReportAbuseScreens/ReportAbuseScreen1';
import ReportAbuseScreen2 from '../../screens/ReportAbuseScreens/ReportAbuseScreen2';
import ReportRecapRightsScreen from '../../screens/ReportAbuseScreens/ReportAbuseRecapRightsScreen';
import ReportRecapArticle from '../../screens/ReportAbuseScreens/ReportAbuseRecapArticle';
import ReportRecapQuiz from '../../screens/ReportAbuseScreens/ReportAbuseRecapQuiz';
import AboutReportAbuseScreen from '../../screens/ReportAbuseScreens/AboutReportAbuseScreen';

import { AppStyles } from '../../../config/styles';
import StackHeaderBackImage from '../StackHeaderBackImage';

const StackHeaderStyle = AppStyles.StackHeaderStyle;
const StackTitleStyle = AppStyles.StackTitleStyle;
const StackBackTitleStyle = AppStyles.StackBackTitleStyle;

const Stack = createStackNavigator();

export default function ReportAbuseStackNav({navigation}) {
    const handleHamburgerPress = () => {
        navigation.openDrawer();
    }
    return (
        <Stack.Navigator initialRoute="Report Abuse" screenOptions={{
            headerStyle: StackHeaderStyle,
            headerTitleStyle: StackTitleStyle,
            headerBackImage: StackHeaderBackImage,
            headerBackTitleStyle: StackBackTitleStyle }}>
            <Stack.Screen name="Report Abuse" component={ReportAbuseScreen1}
                options={{title: "Report Abuse", headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../../assets/HMIcon.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    )}} />
            <Stack.Screen name="Incident Info" component={ReportAbuseScreen2} />
            <Stack.Screen name="Recap Rights" component={ReportRecapRightsScreen} />
            <Stack.Screen name="Report RecapArticle" component={ReportRecapArticle} options = { ({route}) => ({title: route.params.title})} />  
            <Stack.Screen name="Report Human Rights Quiz" component={ReportRecapQuiz} />  
            <Stack.Screen name="About Report Abuse" component={AboutReportAbuseScreen}/> 
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