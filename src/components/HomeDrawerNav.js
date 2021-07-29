import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
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

const Drawer = createDrawerNavigator();


export default function HomeDrawerNav({navigation}) {
    return (
        <Drawer.Navigator initialRoute="Home"
            drawerType="slide"
            drawerStyle={{
                backgroundColor: colors.light_grey,
                }}
            drawerContent={HomeDrawer}
            drawerContentOptions={{
                activeBackgroundColor: colors.active_tab,
                inactiveBackgroundColor: colors.inactive_tab,
                itemStyle: {
                    shadowRadius: 5,
                    shadowColor: colors.black,
                    borderColor: colors.black,
                    borderWidth: 1,
                    borderRadius: 10,
                },
                contentContainerStyle: {
                    justifyContent: 'center',
                    alignContent: 'center',
                },
                style: {
                    borderColor: colors.black,
                    borderRightWidth: 1,
                },
                
            }}>

            <Drawer.Screen name="Home" component={HomeTabNav} options={{
                drawerIcon: () => <AntDesign name="home" size={24} color="black" />
            }}/>
            <Drawer.Screen name="Recap Rights" component={RecapRightsTabNav} options={{
                drawerIcon: () => <FontAwesome name="book" size={24} color="black" />
            }}/>
            <Drawer.Screen name="Report Abuse" component={ReportAbuseStackNav} options={{
                drawerIcon: () => <MaterialIcons name="report" size={24} color="black" />
            }}/>
            <Drawer.Screen name="Reach Out" component={ReachOutStackNav} options={{
                drawerIcon: () => <AntDesign name="wechat" size={24} color="black" />
            }}/>
            <Drawer.Screen name="Research Analytics" component={ResearchStackNav} options={{
                drawerIcon: () => <MaterialCommunityIcons name="brain" size={24} color="black" />
            }}/>
            <Drawer.Screen name="Profile" component={ProfileStackNav} options={{
                drawerIcon: () => <FontAwesome5 name="user" size={24} color="black" />
            }}/>
            <Drawer.Screen name="Log Out" component={LoggedOutScreen} labelStyle={styles.logoutLabelStyle} options={{
                drawerIcon: () => <MaterialCommunityIcons name="exit-run" size={24} color="black" />
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