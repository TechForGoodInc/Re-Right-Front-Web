import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '../../screens/HomeScreens/ChatScreen';
import { AppStyles } from '../../../config/styles';
import StackHeaderBackImage from '../StackHeaderBackImage';

import color from "../../../config/colors";
import darkColors from "../../../config/darkColors";
import '../../../config/global';

const Stack = createStackNavigator();

export default function ChatStackNav({navigation}) {
    
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
        <Stack.Navigator initialRoute="Chat" screenOptions={{
            headerStyle: StackHeaderStyle,
            headerTitleStyle: StackTitleStyle,
            headerBackImage: StackHeaderBackImage,
            headerBackTitleStyle: StackBackTitleStyle }}>
            <Stack.Screen name="Chat" component={ChatScreen}
                options={{title: "Chat", headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../../assets/HMIcon.png')} style = {styles.menuicon} />
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




