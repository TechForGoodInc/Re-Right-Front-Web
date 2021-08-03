import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import React, { useEffect,useState } from 'react';
import { Text, View, StyleSheet, Pressable, Image, SafeAreaView, useColorScheme } from 'react-native';
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
            justifyContent: 'flex-start',
        },
        logo: {
            height: 20,
            width: 150,
            padding: 20,
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
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            borderColor: colors.border_button,
            borderWidth: 2,
            
        },
        signupButton: {
            width: "50%",
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            borderColor: colors.border_button,
            borderWidth: 2,
            borderRightWidth: 0,
        },
        buttonText: {
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        },
      });

    
    const handleLoginRoute = () => {
        navigation.navigate("Login");
    }
    const handleSignupRoute = () => {
        navigation.navigate("Signup 1");
    }
    return (
        <SafeAreaView style={styles.screenBackground}>
            <View style = {styles.titleView}> 
                <Image source={require("../../assets/rerightlogo.png")} style = {styles.logo}/>
                <Text style= {styles.title}>Welcome to Re-Right</Text>
            </View>
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


 
