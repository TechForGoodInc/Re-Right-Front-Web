import React, { Component } from 'react';
import { Text, View, StyleSheet, Pressable, Alert } from 'react-native';
import { KeycodeInput } from 'react-native-keycode';

import colors from '../../config/colors';

const CODE_LENGTH = 6;

export default class ForgotPassScreen2 extends Component {
    state = {
        code: '',
    }
    handleContinuePress = () => {
        //Alert.alert("You entered: " + this.state.code, "Code must match one sent through email to proceed.");
        this.props.navigation.navigate("Forgot Password 3");
    }
    handleCodeComplete = (code) => {
        this.setState({code: code}, () => {
            Alert.alert("You entered: " + this.state.code, "Code must match one sent through email to proceed.");
        })
        this.props.navigation.navigate("Forgot Password 3");
    }
    render () {
        return (
            <View style={styles.background}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Enter code sent to email linked with account</Text>
                    <KeycodeInput numeric={true}
                        length={CODE_LENGTH}
                        onComplete={this.handleCodeComplete}/>
                </View>
                
                <Pressable style={({pressed}) => [{
                        backgroundColor: pressed ? colors.grey : colors.primary,},
                        styles.continueButton,]}
                        onPress={this.handleContinuePress}>
    
                        <Text style={styles.buttonText}>Continue</Text>
                    </Pressable>
            </View>
        );
    }
    
}


 
const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,

    },
    buttonContainer: {
        flexDirection: 'row',
    },
    continueButton: {
        width: "100%",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: colors.black,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: colors.white,
      },
    textInput: {
        width: "75%",
        height: 70,
        borderBottomColor: colors.black,
        borderBottomEndRadius: 10,
        borderWidth: 2,
        textAlign: 'center',
        
    },
    inputContainer: {
        alignItems: 'center',
        width: "100%",
        padding: 20,
    }
  });