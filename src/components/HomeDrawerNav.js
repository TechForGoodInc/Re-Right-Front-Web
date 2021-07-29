import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

import HomeTabNav from './TabNavs/HomeTabNav';
import RecapRightsTabNav from './TabNavs/RecapRightsTabNav';
import ReportAbuseStackNav from './StackNavs/ReportAbuseStackNav';
import ResearchStackNav from './StackNavs/ResearchStackNav';
import ProfileStackNav from './StackNavs/ProfileStackNav';
import ReachOutStackNav from './StackNavs/ReachOutStackNav';

import HomeDrawer from './HomeDrawer';

import LoggedOutScreen from '../screens/LoggedOutScreen';
import colors from '../../config/colors';

const Drawer = createDrawerNavigator();


export default function HomeDrawerNav({navigation}) {
    return (
        <Drawer.Navigator initialRoute="Home"
            drawerType="slide"
            drawerStyle={{
                backgroundColor: colors.blue,
                }}
            drawerContent={HomeDrawer}
            drawerContentOptions={{
                activeBackgroundColor: colors.active_tab,
                inactiveBackgroundColor: colors.inactive_tab,
                itemStyle: {
                    shadowRadius: 10,
                    shadowColor: colors.black,
                },
                contentContainerStyle: {
                    justifyContent: 'center',
                    alignContent: 'center'
                },
                style: {
                    
                },
                
            }}>

            <Drawer.Screen name="Home" component={HomeTabNav}/>
            <Drawer.Screen name="Recap Rights" component={RecapRightsTabNav}/>
            <Drawer.Screen name="Report Abuse" component={ReportAbuseStackNav}/>
            <Drawer.Screen name="Reach Out" component={ReachOutStackNav}/>
            <Drawer.Screen name="Research Analytics" component={ResearchStackNav}/>
            <Drawer.Screen name="Profile" component={ProfileStackNav}/>
            <Drawer.Screen name="Log Out" component={LoggedOutScreen} labelStyle={styles.logoutLabelStyle}/>
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    logoutLabelStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        letterSpacing: 0.25,
        fontSize: 16,
        color: colors.red,
    }
  });