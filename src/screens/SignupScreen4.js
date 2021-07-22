import React, { Component } from 'react';
import colors from '../../config/colors';
import { TouchableWithoutFeedback,Keyboard, View, StyleSheet, Text, Button, SafeAreaView, TextInput } from 'react-native';

const viewConstants = {
    containerTopMargin: '10%',
    containerBottomMargin: '16%',
    containerHorizontalMargins: '7%',
    headingFontSize: 34,
    headerBottomMargin: 18,
    textSize: 15
}

const SignupScreen4 = ({navigation}) => {
    return ( 
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
                <Button style={styles.submitButton} title="Submit"
                    onPress={() => navigation.navigate("Login")}/>
            </SafeAreaView>
        </TouchableWithoutFeedback>
     );
}
 
export default SignupScreen4;

const styles = StyleSheet.create({
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
    displayName:{
        flex:1,
        flexDirection: 'row',
        height: '20%'
    },  
    inputForm: {
        flex:1,
        flexDirection: 'column'
    },  
    inputContainer: {
        flex:1,
        flexDirection: 'row'
    },
    label: {
        fontSize: viewConstants.textSize,
        padding: 10,
        flex:1,
        flexDirection: 'column'
    },
    inputText: {
        flex:1,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: colors.light_grey,
        textAlign: "left",
        justifyContent: 'flex-start',
        paddingBottom: 40,
        marginBottom: 100
    },
    submitButton: {
        marginTop: 100
    }
})