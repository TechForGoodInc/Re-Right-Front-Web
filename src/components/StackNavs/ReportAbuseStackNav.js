import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import ReportAbuseScreen1 from '../../screens/ReportAbuseScreens/ReportAbuseScreen1';
import ReportAbuseScreen2 from '../../screens/ReportAbuseScreens/ReportAbuseScreen2';
import ReportRecapRightsScreen from '../../screens/ReportAbuseScreens/ReportAbuseRecapRightsScreen';
import ReportRecapArticle from '../../screens/ReportAbuseScreens/ReportAbuseRecapArticle';
import ReportRecapQuiz from '../../screens/ReportAbuseScreens/ReportAbuseRecapQuiz';
import AboutReportAbuseScreen from '../../screens/ReportAbuseScreens/AboutReportAbuseScreen';
import StackHeaderBackImage from '../StackHeaderBackImage';

import color from "../../../config/colors";
import darkColors from "../../../config/darkColors";
import '../../../config/global';

const Stack = createStackNavigator();

export default function ReportAbuseStackNav({navigation}) {
    const colors = global.isDarkModeEnabled ? darkColors : color;
    const AppStyles = StyleSheet.create({
        StackHeaderStyle: { // Currently used by all stack navs
            backgroundColor: colors.background_stack_header,
            borderBottomColor: colors.border,
            borderBottomWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10,
            height: 50,
        },
        ProfileStackHeaderStyle: { // Not used currently, but we can customize individual stacks like this
            backgroundColor: colors.primary,
        },
        StackTitleStyle: {
            fontWeight: 'bold',
            letterSpacing: 0.25,
            fontSize: 20,
            color: colors.text_stack_title,
        },
        StackBackTitleStyle: {
            color: colors.text_stack_back_title,
        },
        TabStyle: {
            borderColor: colors.border,
            borderWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10,
        },
        TabLabelStyle: {
            fontWeight: 'bold',
            letterSpacing: 0.25,
            fontSize: 16,
            color: colors.text_tab_label, 
        },
        ScreenBackground: {
            backgroundColor: colors.background_screen,
            flex: 1,
            alignItems: 'center',
        }
    });
    const StackHeaderStyle = AppStyles.StackHeaderStyle;
    const StackTitleStyle = AppStyles.StackTitleStyle;
    const StackBackTitleStyle = AppStyles.StackBackTitleStyle;

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