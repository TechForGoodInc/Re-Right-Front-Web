import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RecapRightScreen1 from '../../screens/RecapRightsScreens/RecapRightsScreen1';
import RecapArticle from '../../screens/RecapRightsScreens/RecapArticle';
import RecapQuiz from '../../screens/RecapRightsScreens/RecapQuiz';

import { AppStyles } from '../../../config/styles';

const StackHeaderStyle = AppStyles.StackHeaderStyle;
const Stack = createStackNavigator();

export default function RecapRightsStackNav({navigation}) {
    const handleHamburgerPress = () => {
        navigation.openDrawer();
    }
    return (
        <Stack.Navigator initialRoute="Recap Rights" screenOptions={{ headerStyle: StackHeaderStyle }}>
            <Stack.Screen name="Recap Rights" component={RecapRightScreen1}
                options={{title: "Recap Rights", headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../../assets/HMIcon.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    )}} />
            <Stack.Screen name="RecapArticle" component={RecapArticle} options = { ({route}) => ({title: route.params.title})} />  
            <Stack.Screen name="Human Rights Quiz" component={RecapQuiz} />    
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