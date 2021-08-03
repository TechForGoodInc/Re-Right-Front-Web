import React from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { Button, StyleSheet } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import HomeTabNav from './TabNavs/HomeTabNav';
import RecapRightsTabNav from './TabNavs/RecapRightsTabNav';
import ReportAbuseStackNav from './StackNavs/ReportAbuseStackNav';
import ResearchStackNav from './StackNavs/ResearchStackNav';
import ProfileStackNav from './StackNavs/ProfileStackNav';
import ReachOutStackNav from './StackNavs/ReachOutStackNav';

import HomeDrawer from './HomeDrawer';

import LoggedOutScreen from '../screens/LoggedOutScreen';
import colors from '../../config/colors';
import ReRightApp from '../ReRightApp';

const Drawer = createDrawerNavigator();


export default function HomeDrawerNav({navigation}) {
    return (
        <Drawer.Navigator initialRoute="Home"
            drawerType="slide"
            drawerStyle={{
                backgroundColor: colors.background_drawer,
                }}
            drawerContent={HomeDrawer}
            drawerContentOptions={{
                unmountOnBlur: true, 
                activeBackgroundColor: colors.active_tab,
                inactiveBackgroundColor: colors.inactive_tab,
                itemStyle: {
                    shadowRadius: 5,
                    shadowColor: colors.shadow,
                    borderColor: colors.border,
                    borderWidth: 1,
                    borderRadius: 10,
                },
                contentContainerStyle: {
                    justifyContent: 'center',
                    alignContent: 'center',
                },
                style: {
                    borderColor: colors.border,
                    borderRightWidth: 1,
                },
                
            }}>

            <Drawer.Screen name="Home" component={HomeTabNav} options={{
                unmountOnBlur: true,  drawerIcon: () => <AntDesign name="home" size={24} color="black" />
            }}/>
            <Drawer.Screen name="Recap Rights" component={RecapRightsTabNav} options={{
                unmountOnBlur: true, drawerIcon: () => <FontAwesome name="book" size={24} color="black" />
            }}/>
            <Drawer.Screen name="Report Abuse" component={ReportAbuseStackNav} options={{
                unmountOnBlur: true, drawerIcon: () => <MaterialIcons name="report" size={24} color="black" />
            }}/>
            <Drawer.Screen name="Reach Out" component={ReachOutStackNav} options={{
                unmountOnBlur: true, drawerIcon: () => <AntDesign name="wechat" size={24} color="black" />
            }}/>
            <Drawer.Screen name="Research Analytics" component={ResearchStackNav} options={{
                unmountOnBlur: true, drawerIcon: () => <MaterialCommunityIcons name="brain" size={24} color="black" />
            }}/>
            <Drawer.Screen name="Profile" component={ProfileStackNav} options={{
                unmountOnBlur: true, drawerIcon: () => <FontAwesome5 name="user" size={24} color="black" />
            }}/>
            <Drawer.Screen name="Log Out" component={LoggedOutScreen} labelStyle={styles.logoutLabelStyle} options={{
                unmountOnBlur: true, drawerIcon: () => <MaterialCommunityIcons name="exit-run" size={24} color="black" />
            }}/>
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