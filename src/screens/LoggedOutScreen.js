import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import React, {useEffect, useState} from 'react';
import { useColorScheme} from 'react-native';
import { Text, View, StyleSheet, Pressable, Image, SafeAreaView, Platform } from 'react-native';

import color from "../../config/colors";
import darkColors from "../../config/darkColors";
import '../../config/global';

export default function LoggedOutScreen({navigation}) {
    const {landscape} = useDeviceOrientation();
    const {width, height} = useDimensions();
    var colors = global.isDarkModeEnabled ? darkColors : color;
    
    //styles are here
    const styles = StyleSheet.create({
        titleView: {
            flex: 1,
            justifyContent: 'center',
            paddingTop: '10%',
        },
        logo: {
            height: 100,
            width: 190,
            padding: 20,
            marginTop: 50,
            marginBottom: width > height || landscape ? 30: 150
        },
        logo_icon: {
            height: 20,
            width: 35,
            padding: 20,
            marginTop: 50,
            marginBottom: width > height || landscape ? 30: 150
        },
        logo_text: {
            height: 8,
            width: 300,
            padding: 20,
            paddingLeft: 80,
            marginTop: 50,
            marginBottom: width > height || landscape ? 30: 150
        },  
        title: {
            fontWeight: '800',
            color: colors.text_screen_header,
            fontSize: 60,
        },
        screenBackground: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: colors.background_screen,
        },
        buttonContainer: {          
            flexDirection: 'row',
            alignSelf: 'stretch',
        },
        loginButton: {
            width: "50%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderTopColor: colors.border,
            borderLeftColor: colors.border,
            borderTopWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10,  
            
        },
        signupButton: {
            width: "50%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderColor: colors.border,
            borderTopWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10,  
        },
        buttonText: {
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: colors.text_button,
        },
      });

    
    const handleLoginRoute = () => {
        navigation.navigate("Login");
    }
    const handleSignupRoute = () => {
        navigation.navigate("Signup 1");
    }
    const Logo = () => {
        if (Platform.OS == 'web') {
            return(
                <View style = {styles.titleView}> 
                <Image source={require("../../assets/rerightlogo.png")} style = {styles.logo}/>
                <Text style= {styles.title}>Welcome to Re-Right </Text>
                </View>
            );
        } else {
            return(
                <View style = {styles.titleView}>
                <Text style= {styles.title}>Welcome to </Text>
                <View style = {{flexDirection:"row"}}>
                    <Image style = {styles.logo_icon} source={require("../../assets/logo_icon.png")} /> 
                    <Image style = {styles.logo_text} source={require("../../assets/logo_text.png")} />
                </View>
                </View>
            );
        }
    }
    return (
        <SafeAreaView style={styles.screenBackground}>
            <Logo /> 
            <View style={styles.buttonContainer}>
                <Pressable style={({pressed}) => [{
                    backgroundColor: pressed ? colors.button_pressed : colors.button_signup,},
                    styles.signupButton,]}
                    onPress={() => handleSignupRoute()}>

                    <Text style={styles.buttonText}>To Signup</Text>
                </Pressable>
                
                <Pressable style={({pressed}) => [{
                    backgroundColor: pressed ? colors.button_pressed : colors.button_login,},
                    styles.loginButton,]}
                    onPress={() => handleLoginRoute()}>

                    <Text style={styles.buttonText}>To Login</Text>
                </Pressable>
            </View>
        </SafeAreaView>
        
    );
}


 
