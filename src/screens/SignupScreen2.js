import React, { Component } from 'react';
import colors from '../../config/colors';
import { Pressable, TouchableWithoutFeedback,Keyboard, View, StyleSheet, Text, Button, SafeAreaView, TextInput } from 'react-native';

const viewConstants = {
    containerTopMargin: '10%',
    containerBottomMargin: '16%',
    containerHorizontalMargins: '7%',
    headingFontSize: 34,
    headerBottomMargin: 18,
    textSize: 15
}

const SignupScreen2 = ({navigation}) => {
    const handleContinuePress = () => {
        navigation.navigate("Signup 3");
    }
    return ( 
        <View style={styles.screenBackground}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style = { styles.container} > 
                <View style = {styles.header}>
                        <Text style = {styles.headerTitle}>Security Questions</Text>
                        <Text style = {styles.headerText} >Answer a couple of security questions to help you get back into your account if you ever forget your password.</Text>
                        <Text style = {styles.linkText} onPress={() => navigation.navigate("Signup 1")} >Edit username or password?</Text>
                </View>
                <View>
                    <View>
                        <Text style={styles.label}>Security Question 1: </Text>
                        <TextInput style={styles.inputText} placeholder="Dropdowm SQ and input " autoCapitalize='none'/>
                    </View>
                    <View>
                        <Text style={styles.label} >Security Question 2: </Text>
                        <TextInput style={styles.inputText} placeholder="Dropdowm SQ and input " />
                    </View>
                    <View style = {styles.lastInput}>
                        <Text style={styles.label}>Security Question 3: </Text>
                        <TextInput style={styles.inputText} placeholder="Dropdowm SQ and input " />
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
 
export default SignupScreen2;

const styles = StyleSheet.create( {
    container: {
        marginHorizontal: viewConstants.containerHorizontalMargins,
        flex: 1,
        justifyContent: 'center'
    },
    header: {
       marginBottom: viewConstants.headerBottomMargin
    },
    headerTitle: {
        fontWeight: '800',
        fontSize: viewConstants.headingFontSize,
        color: colors.blue,
        paddingVertical: '3%'
    },
    headerText: {
        fontSize: viewConstants.textSize,
    },
    linkText: {
        textDecorationLine: 'underline',
        paddingVertical: '3%',
        
    },
    label: {
        fontSize: viewConstants.textSize,
        padding: 10
    },
    inputText: {
        borderWidth: 2,
        borderColor: colors.light_grey,
        borderRadius: 10,
        textAlign: 'center',
        padding: 10,
        fontSize: viewConstants.textSize,
    },
    lastInput:{
        paddingBottom: 20,
    },
    submitButton: {
        marginTop: 20
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