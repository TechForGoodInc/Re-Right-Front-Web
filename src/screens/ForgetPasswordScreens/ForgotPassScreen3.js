import React from 'react';
import { Text, View, StyleSheet, Pressable, TextInput, Keyboard, SafeAreaView } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import colors from '../../../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


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

export default function ForgotPassScreen3({navigation}) {
    const { landscape, portrait } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    //styles are here
    const styles = StyleSheet.create( {
        container: {
            marginHorizontal: viewConstants.containerHorizontalMargins,
            marginBottom: '25%',
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
    const handleContinueRoute = () => {
        navigation.navigate("Forgot Password 4");
    }
    const handleChangeText1 = ({userInput}) => {
        // Runs everytime the user enters or deletes a character
        console.log("Q1 Answer: " + userInput);
    }
    const handleChangeText2 = ({userInput}) => {
        // Runs everytime the user enters or deletes a character
        console.log("Q2 Answer: " + userInput);
    }
    const handleChangeText3 = ({userInput}) => {
        // Runs everytime the user enters or deletes a character
        console.log("Q3 Answer: " + userInput);
    }
    return (
        <View style={styles.screenBackground}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <View style = {styles.header}>
                        <Text style = {styles.headerTitle}>
                            Answer Security Questions
                        </Text>
                    </View>
                    <View styles = { styles.inputView }>
                        <View>
                            <Text style={styles.label}>
                                Security Question 1
                            </Text>
                            <TextInput style={styles.inputText} 
                                placeholder="Enter Your Answer" 
                                autoCapitalize='none'
                                onChangeText={(userInput) => handleChangeText1({userInput})}/>
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Security Question 2
                            </Text>
                            <TextInput style={styles.inputText} 
                                placeholder="Enter Your Answer" 
                                autoCapitalize='none'
                                onChangeText={(userInput) => handleChangeText2({userInput})}/>
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Security Question 3
                            </Text>
                            <TextInput style={styles.inputText} 
                                placeholder="Enter Your Answer" 
                                autoCapitalize='none'
                                onChangeText={(userInput) => handleChangeText3({userInput})}/>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>

            <Pressable style={({pressed}) => [{
                backgroundColor: pressed ? colors.grey : colors.primary,},
                styles.continueButton,]}
                onPress={() => handleContinueRoute()}>

                <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
        </View>
    );
    
}