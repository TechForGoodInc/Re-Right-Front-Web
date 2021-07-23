import React, { Component } from 'react';
import colors from '../../config/colors';
import { Pressable, TouchableWithoutFeedback,Keyboard, View, StyleSheet, Text, Button, SafeAreaView, TextInput } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

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

const SignupScreen4 = ({navigation}) => {
    //getting the dimensions and the orientation
    const { landscape, portrait } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    //styles are here
    const styles = StyleSheet.create( {
        container: {
            marginHorizontal: viewConstants.containerHorizontalMargins,
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
            color: colors.blue,
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
        inputForm: {
            flex:( landscape|| width>height) ? 1 : 0
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
        inputParagraph: {
            borderWidth: viewConstants.textBoxBorderWidth,
            height: ( landscape|| width>height) ? 100 : 200,
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
        linkText: {
            color: colors.blue,
            fontSize: 18,
            marginBottom: '2%',
        },
    })
    const handleSubmitPress = () => {
        navigation.reset({
            index: 1,
            routes: [{name: 'Logged Out'}, {name: 'Login'}],
          });
    }
    return ( 
        <View style={styles.screenBackground}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style = { styles.container} > 
                <View style = {styles.header}>
                        <Text style = {styles.headerTitle}>Social Media Abuse Tracking</Text>
                </View>
                <View style = {styles.inputForm}>
                    <View style = {styles.inputContainer}>
                        <Text style={styles.label}> Instagram </Text>
                        <TextInput style={styles.inputText} placeholder="CheckBox Yes/No " autoCapitalize='none'/>
                    </View>
                    <View style = {styles.inputContainer}>
                        <Text style={styles.label} >Facebook </Text>
                        <TextInput style={styles.inputText} placeholder="CheckBox Yes/No " />
                    </View>
                    <View style = {styles.inputContainer}>
                        <Text style={styles.label} >Twitter </Text>
                        <TextInput style={styles.inputText} placeholder="CheckBox Yes/No " />
                    </View>
                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
        <Pressable style={({pressed}) => [{
                backgroundColor: pressed ? colors.grey : colors.blue,},
                styles.continueButton,]}
                onPress={() => handleSubmitPress()}>
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
        </View>
        
     );
}
 
export default SignupScreen4;

// const styles = StyleSheet.create( {
//     container: {
//         marginHorizontal: viewConstants.containerHorizontalMargins,
//         flex: 1,
//         justifyContent: 'center'
//     },
//     header: {
//        marginBottom: viewConstants.headerBottomMargin
//     },
//     headerTitle: {
//         fontWeight: '800',
//         fontSize: viewConstants.headingFontSize,
//         color: colors.blue,
//         paddingVertical: '3%'
//     },
//     headerText: {
//         fontSize: viewConstants.textSize,
//     },
//     linkText: {
//         textDecorationLine: 'underline',
//         paddingVertical: '3%',
        
//     },
//     label: {
//         fontSize: viewConstants.textSize,
//         padding: 10
//     },
//     inputText: {
//         borderWidth: 2,
//         borderColor: colors.light_grey,
//         borderRadius: 10,
//         textAlign: 'center',
//         padding: 10,
//         fontSize: viewConstants.textSize,
//     },
//     lastInput:{
//         paddingBottom: 20,
//     },
//     submitButton: {
//         marginTop: 20
//     },
//     screenBackground: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         backgroundColor: colors.white,
        
//     },
//     buttonText: {
//         fontSize: 16,
//         lineHeight: 21,
//         fontWeight: 'bold',
//         letterSpacing: 0.25,
//         color: 'white',
//       },
//     continueButton: {
//         width: "100%",
//         height: 70,
//         justifyContent: "center",
//         alignItems: "center",
//     },
// })