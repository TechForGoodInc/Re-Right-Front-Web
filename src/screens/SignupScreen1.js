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

export default function SignupScreen1({navigation}) {
    const handleContinuePress = () => {
        navigation.navigate("Signup 2");
    }
    return (
        <View style={styles.screenBackground}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style = { styles.container} > 
                    <View style = {styles.header}>
                        <Text style = {styles.headerTitle}>Getting Started</Text>
                        <Text style = {styles.headerText} >Welcome to Re-Right. Create a free account to access all of the amazing features this app has :)</Text>
                        <Text style = {styles.linkText} onPress={() => navigation.navigate("Login")} >Already have an account?</Text>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.label}>Email: </Text>
                            <TextInput style={styles.inputText} placeholder="Enter Your E-mail ID" keyboardType = 'email-address' textContentType = 'emailAddress' autoCompleteType='email' autoCapitalize='none'/>
                        </View>
                        <View>
                            <Text style={styles.label} >Username: </Text>
                            <TextInput style={styles.inputText} placeholder="Create a Username" textContentType='username'/>
                        </View>
                        <View>
                            <Text style={styles.label}>Date of Birth: </Text>
                            <TextInput style={styles.inputText} placeholder="Date of Birth" />
                        </View>
                        <View>
                            <Text style={styles.label}>Password: </Text>
                            <TextInput secureTextEntry={true} textContentType = "newPassword" autoCompleteType='password' style={styles.inputText} placeholder="Create a Password" autoCapitalize='none'/>
                        </View>
                        <View style={styles.lastInput}>
                            <Text style={styles.label}>Confirm Password: </Text>
                            <TextInput secureTextEntry={true} textContentType = "newPassword" autoCompleteType='password' style={styles.inputText} placeholder="Confirm your Password" autoCapitalize='none' />
                        </View>
                    </View>
                </SafeAreaView>
                
            </TouchableWithoutFeedback>
            <Pressable style={({pressed}) => [{
                backgroundColor: pressed ? colors.grey : colors.primary,},
                styles.continueButton,]}
                onPress={() => handleContinuePress()}>

                <Text style={styles.text}>Continue</Text>
            </Pressable>
        </View>
        
        
    );
}
 
const styles = StyleSheet.create( {
    container: {
        marginBottom: viewConstants.containerBottomMargin,
        marginTop: viewConstants.containerTopMargin,
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
    text: {
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