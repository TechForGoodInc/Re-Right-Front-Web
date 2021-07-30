import React, { Component } from 'react';
import { Pressable, Alert, TouchableWithoutFeedback,Keyboard, View, StyleSheet, Text, Button, SafeAreaView, TextInput } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';


import colors from '../../../config/colors';

const viewConstants = {
    containerTopMargin: '10%',
    containerBottomMargin: '16%',
    containerHorizontalMargins: '7%',
    headingFontSize: 34,
    headingFontSizeLandscape: 50,
    headerBottomMargin: 18,
    textSize: 15,
    textSizeLandscape: 18,
    headerTextLandscapePadding: 80,
    labelPadding: 10,
    textBoxBorderWidth: 2,
    textBoxBorderRadius: 10,
    textBoxPadding: 10
}

export default function ForgotPassScreen1({navigation}) {
    const { landscape, portrait } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    //styles are here
    const styles = StyleSheet.create( {
        container: {
            marginHorizontal: viewConstants.containerHorizontalMargins,
            marginTop: '8%',
            flex: 1,
            justifyContent: 'center',
            flexDirection: ( landscape|| width>height)? 'row' : null,
        },
        header: {
            marginBottom: viewConstants.headerBottomMargin,
            flex: (landscape|| width>height) ? 1 : 0,
            flexDirection: 'column',
            width: ( landscape|| width>height) ? '50%' : '100%',
        },
        headerTitle: {
            fontWeight: '800',
            fontSize: ( landscape|| width>height) ? viewConstants.headingFontSizeLandscape: viewConstants.headingFontSize,
            color: colors.primary,
            paddingVertical: ( landscape|| width>height) ? 0 : '3%',
            paddingTop: ( landscape|| width>height) ? '5%' : 0
        },
        headerText: {
            fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
            marginEnd: ( landscape|| width>height) ? viewConstants.headerTextLandscapePadding: 0,
            paddingTop: ( landscape|| width>height) ? '5%' : 0,
        },
        linkText: {
            textDecorationLine: 'underline',
            paddingVertical: '3%',
            fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
        },
        inputView: {
            flex:1,
            flexDirection: 'column',
            marginHorizontal: 40
        },
        label: {
            fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
            padding: viewConstants.labelPadding,
            marginHorizontal: ( landscape|| width>height)? viewConstants.labelPadding : 0
        },
        inputText: {
            borderWidth: viewConstants.textBoxBorderWidth,
            borderColor: colors.light_grey,
            borderRadius: viewConstants.textBoxBorderRadius,
            textAlign: 'center',
            padding: viewConstants.textBoxPadding,
            fontSize:  ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
            marginHorizontal: viewConstants.textBoxPadding,
        },
        screenBackground: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: colors.white,
        },
        buttonText: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
            },
        continueButton: {
            width: "100%",
            height: 70,
            justifyContent: "center",
            alignItems: "center",
        },
    })

    const handleContinuePress = () => {
        // Determine if entered username/email is linked to existing account
        // If not, display error and keep them on this page
        navigation.navigate("Forgot Password 2");
    }
    
    return (
        <View style={styles.screenBackground}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <View style = {styles.header}>
                        <Text style = {styles.headerTitle}>
                            Forgot Password
                        </Text>
                    </View>
                    <View styles = { styles.inputView }>
                        <View>
                            <Text style={styles.label}>
                                Enter Your Username or Email: 
                            </Text>
                            <TextInput style={styles.inputText} 
                                placeholder="Username or Email" 
                                keyboardType = 'email-address' 
                                textContentType = 'emailAddress' 
                                autoCompleteType='email' 
                                autoCapitalize='none'
                                onChangeText={(userInput) => handleChangeText({userInput})}/>
                        </View>
                    </View>      
                </SafeAreaView>
            </TouchableWithoutFeedback>
            <Pressable style={({pressed}) => [{
                backgroundColor: pressed ? colors.grey : colors.primary,},
                styles.continueButton,]}
                onPress={() => handleContinuePress()}>

                <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
        </View>
    );
}