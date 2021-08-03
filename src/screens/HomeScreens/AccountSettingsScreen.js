import React, {useState} from "react";
import { Button, Image, Pressable, ScrollView, SwitchComponent, Text, View,Switch, StyleSheet } from 'react-native'
import colors from "../../../config/colors";
import colorsTest from "../../../config/colorsTest";
import "../../../config/global.js";

const AccountSettings = ({navigation}) => {
    const [bioIsEnabled, setbioIsEnabled] = useState(false);
    const togglebioSwitch = () => setbioIsEnabled(previousState => !previousState);
    const [discoverIsEnabled, setdiscoverIsEnabled] = useState(false);
    const togglediscoverSwitch = () => setdiscoverIsEnabled(previousState => !previousState);
    const [darkIsEnabled, setdarkIsEnabled] = useState(global.isDarkModeEnabled);
    const toggledarkSwitch = () => {
        global.isDarkModeEnabled = !global.isDarkModeEnabled;
        setdarkIsEnabled(global.isDarkModeEnabled);
        navigation.navigate( 'Profile', {isItDark: global.isDarkModeEnabled});
    }
   
    const handleUserNamePress = () => {
        navigation.navigate("ChangeUserName")
    }
    const handleEmailPress = () => {
        navigation.navigate("ChangeEmail")
    }
    const handlePasswordPress = () => {
        navigation.navigate("ChangePassword")
    }
    return ( 
        <ScrollView style= {{backgroundColor: darkIsEnabled? '#181818' : 'rgb(239,239,239)'}}>
            <View style={{width: '100%',padding:'2%'}}>
            <Text style={{color: darkIsEnabled? 'white' : colors.black, marginTop: 20, marginLeft:'5%', fontSize: 20, fontWeight: '600'}}> Account Details </Text>
                <View style={{marginTop: 10,width: '92%', flexDirection: 'column', alignContent: 'center',backgroundColor:colors.white, alignSelf: 'center', borderRadius: 20}}>
                <Pressable onPress={() => handleUserNamePress()} style={ ({pressed}) => [ { backgroundColor: darkIsEnabled===false?(pressed? colors.light_grey: 'white'):(pressed? colors.grey: '#212121'), paddingVertical: 15, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 1,borderTopStartRadius:20, paddingTop: 18,borderTopEndRadius:20, borderColor: colors.light_grey}]}>
                    <Image style={{ tintColor: darkIsEnabled? 'white': 'black', alignItems: "flex-start", width: 30, height: 30,marginRight: 2}} source={require('../../../assets/user.png')} />
                    <Text style = {[{ color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400"},styles.subtitle]}> Change Username </Text>
                    <Image style={{tintColor: darkIsEnabled? 'white': 'black',alignItems: "flex-end",alignContent: "flex-end",alignSelf: "flex-end", width: 12, height: 12, marginTop:0,marginRight: 20}} source={require('../../../assets/right-arrow.png')} />
                </Pressable>
                <Pressable onPress={() => handleEmailPress()}style={ ({pressed}) => [ { backgroundColor: darkIsEnabled===false?(pressed? colors.light_grey: 'white'):(pressed? colors.grey: '#212121'), paddingVertical: 15, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 1,borderTopStartRadius:0, paddingTop: 18,borderTopEndRadius:0, borderColor: colors.light_grey}]}>
                    <Image style={{ tintColor: darkIsEnabled? 'white': 'black',alignItems: "flex-start", width: 30, height: 30,marginRight: 2}} source={require('../../../assets/email.png')} />
                    <Text style = {[{ color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400"},styles.subtitle]}> Change Email </Text>
                    <Image style={{tintColor: darkIsEnabled? 'white': 'black',alignItems: "flex-end",alignContent: "flex-end",alignSelf: "flex-end", width: 12, height: 12, marginTop:0,marginRight: 20}} source={require('../../../assets/right-arrow.png')} />
                </Pressable>
                <Pressable onPress={() => handlePasswordPress()}style={ ({pressed}) => [ { backgroundColor: darkIsEnabled===false?(pressed? colors.grey: 'white'):(pressed? colors.grey: '#212121'), paddingVertical: 15, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 0,borderBottomStartRadius:20, paddingTop: 18,borderBottomEndRadius:20,  borderColor: colors.light_grey}]}>
                    <Image style={{ tintColor: darkIsEnabled? 'white': 'black',alignItems: "flex-start", width: 30, height: 30,marginRight: 2}} source={require('../../../assets/padlock.png')} />
                    <Text style = {[{ color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400"},styles.subtitle]}> Change Password </Text>
                    <Image style={{tintColor: darkIsEnabled? 'white': 'black',alignItems: "flex-end",alignContent: "flex-end",alignSelf: "flex-end", width: 12, height: 12, marginTop:0,marginRight: 20}} source={require('../../../assets/right-arrow.png')} />
                </Pressable>
                </View>
            </View>
            <View style={{width: '100%',padding:'2%'}}>
            <Text style={{color: darkIsEnabled? 'white' : colors.black,marginTop: 20, marginLeft:'5%', fontSize: 20, fontWeight: '600'}}> Privacy </Text>
                <View style={{marginTop: 10,width: '92%', flexDirection: 'column', alignContent: 'center',backgroundColor:colors.white, alignSelf: 'center', borderRadius: 20}}>
                <Pressable style={ ({pressed}) => [ { backgroundColor: darkIsEnabled===false?(pressed? 'white': 'white'):(pressed? '#212121': '#212121'), paddingVertical: 15, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 1,borderTopStartRadius:20, paddingTop: 18,borderTopEndRadius:20, borderColor: colors.light_grey}]}>
                    <Image style={{ alignItems: "flex-start", width: 30, height: 30,marginRight: 2}} source={require('../../../assets/research.png')} />
                    <Text style = {[{ color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400"},styles.subtitle]}> Show my bio publicly </Text>
                    <Switch style = {{marginRight: 12}}
                            trackColor={{ false: "grey", true: "light_green" }}
                            thumbColor={bioIsEnabled ? "white" : "white"}
                            ios_backgroundColor="grey"
                            onValueChange={togglebioSwitch}
                            value={bioIsEnabled} />
                </Pressable>
                <Pressable style={ ({pressed}) => [ { backgroundColor: darkIsEnabled===false?(pressed? 'white': 'white'):(pressed? '#212121': '#212121'), paddingVertical: 15, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 0,borderBottomStartRadius:20, paddingTop: 18,borderBottomEndRadius:20,  borderColor: colors.light_grey}]}>
                    <Image style={{ tintColor: darkIsEnabled? 'white': 'black',alignItems: "flex-start", width: 30, height: 30,marginRight: 2}} source={require('../../../assets/private.png')} />
                    <Text style = {[{ color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400", paddingRight: 4},styles.subtitle]}> Allow users to discover my profile </Text>
                    <Switch style = {{marginRight: 12}}
                            trackColor={{ false: "grey", true: "light_green" }}
                            thumbColor={discoverIsEnabled ? "white" : "white"}
                            ios_backgroundColor="grey"
                            onValueChange={togglediscoverSwitch}
                            value={discoverIsEnabled} />
                </Pressable>
                </View>
            </View>
            <View style={{width: '100%',padding:'2%'}}>
            <Text style={{color: darkIsEnabled? 'white' : colors.black,marginTop: 20, marginLeft:'5%', fontSize: 20, fontWeight: '600'}}> Security </Text>
                <View style={{marginTop: 10,width: '92%', flexDirection: 'column', alignContent: 'center',backgroundColor: darkIsEnabled? colors.grey:colors.white, alignSelf: 'center', borderRadius: 20}}>
                <Pressable onPress={() => navigation.navigate("Social Media Tracking",{signedIn:true})}  style={ ({pressed}) => [ { backgroundColor: darkIsEnabled===false?(pressed? colorsTest.light_grey: 'white'):(pressed? colors.grey: '#212121'), paddingVertical: 15, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 1,borderTopStartRadius:20, paddingTop: 18,borderTopEndRadius:20, borderColor: colors.light_grey}]}>
                    <Image style={{ tintColor: darkIsEnabled? 'white': 'black',alignItems: "flex-start", width: 30, height: 30,marginRight: 2}} source={require('../../../assets/user.png')} />
                    <Text style = {[{ color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400"},styles.subtitle]}> Social Media Tracking </Text>
                    <Image style={{tintColor: darkIsEnabled? 'white': 'black',alignItems: "flex-end",alignContent: "flex-end",alignSelf: "flex-end", width: 12, height: 12, marginTop:0,marginRight: 20}} source={require('../../../assets/right-arrow.png')} />
                </Pressable>
                <Pressable style={ ({pressed}) => [ { backgroundColor: darkIsEnabled===false?(pressed? colorsTest.light_grey: 'white'):(pressed? colors.grey: '#212121'), paddingVertical: 15, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 0,borderBottomStartRadius:20, paddingTop: 18,borderBottomEndRadius:20,  borderColor: colors.light_grey}]}>
                    <Image style={{ tintColor: darkIsEnabled? 'white': 'black',alignItems: "flex-start", width: 30, height: 30,marginRight: 2}} source={require('../../../assets/private.png')} />
                    <Text style = {[{ color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400"},styles.subtitle]}> Other Settings</Text>
                    <Image style={{tintColor: darkIsEnabled? 'white': 'black',alignItems: "flex-end",alignContent: "flex-end",alignSelf: "flex-end", width: 12, height: 12, marginTop:0,marginRight: 20}} source={require('../../../assets/right-arrow.png')} />
                </Pressable>
                </View>
            </View>
            <View style={{width: '100%',padding:'2%'}}>
            <Text style={{color: darkIsEnabled? 'white' : colors.black,marginTop: 20, marginLeft:'5%', fontSize: 20, fontWeight: '600'}}> Display </Text>
                <View style={{marginTop: 10,width: '92%', flexDirection: 'column', alignContent: 'center',backgroundColor: darkIsEnabled? colors.grey:colors.white, alignSelf: 'center', borderRadius: 20}}>
                <Pressable style={ ({pressed}) => [ { backgroundColor: darkIsEnabled===false?(pressed? 'white': 'white'):(pressed? '#212121': '#212121'), paddingVertical: 15, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 1,borderTopStartRadius:20, paddingTop: 18,borderTopEndRadius:20, borderColor: colors.light_grey}]}>
                    <Image style={{ alignItems: "flex-start", width: 30, height: 30,marginRight: 2}} source={require('../../../assets/research.png')} />
                    <Text style = {[{ color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400", paddingRight: 4},styles.subtitle]}> Dark Mode </Text>
                    <Switch style = {{marginRight: 12}}
                            trackColor={{ false: "grey", true: "light_green" }}
                            thumbColor={darkIsEnabled ? "white" : "white"}
                            ios_backgroundColor="grey"
                            onValueChange={toggledarkSwitch}
                            value={darkIsEnabled} />
                </Pressable>
                <Pressable style={ ({pressed}) => [ { backgroundColor: darkIsEnabled===false?(pressed? colorsTest.light_grey: 'white'):(pressed? colors.grey: '#212121'), paddingVertical: 15, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 0,borderBottomStartRadius:20, paddingTop: 18,borderBottomEndRadius:20,  borderColor: colors.light_grey}]}>
                     <Image style={{ tintColor: darkIsEnabled? 'white': 'black',alignItems: "flex-start", width: 30, height: 30,marginRight: 2}} source={require('../../../assets/private.png')} />
                     <Text style = {[{ color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400", paddingRight: 4},styles.subtitle]}> Custom Modes</Text>                   
                    <Image style={{tintColor: darkIsEnabled? 'white': 'black',alignItems: "flex-end",alignContent: "flex-end",alignSelf: "flex-end", width: 12, height: 12, marginTop:0,marginRight: 20}} source={require('../../../assets/right-arrow.png')} />
                </Pressable>
                </View>
            </View>
        </ScrollView>
     );
}
 
const styles = StyleSheet.create({
    subtitle: {
        fontSize: 19,
        fontWeight: '500'
    }
})
export default AccountSettings;

