import React, { Component } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput, Alert } from 'react-native';

import colors from '../../config/colors';

export default class ForgotPassScreen1 extends Component {
    state = {
        userInput: '',
        email: '',
        username: '',
    }
    handleContinuePress = () => {
        // Determine if entered username/email is linked to existing account
        // If not, display error and keep them on this page
        Alert.alert("You entered: " + this.state.userInput, "This must be linked to an existing account. (Check to be implemented later)");
        this.props.navigation.navigate("Forgot Password 2");
    }
    render () {
        return (
            <View style={styles.background}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Please enter your Username or Email</Text>
                    <TextInput style={styles.textInput}
                        placeholder="Username or Email"
                        onChangeText={(userInput) => this.setState({userInput: userInput})}>
    
                    </TextInput>
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