import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecapRightsStackNav from '../StackNavs/RecapRightsStackNav';
import RecapQuiz from '../../screens/RecapRightsScreens/RecapQuiz';

const BottomTabs = createBottomTabNavigator();

export default function RecapRightsTabNav({navigation}) {
    return (
        <BottomTabs.Navigator initialRoute="Recap Rights">
            <BottomTabs.Screen name="Recap Rights" component={RecapRightsStackNav}/>
            <BottomTabs.Screen name="Quiz" component={RecapQuiz}/>
        </BottomTabs.Navigator>
    )
}