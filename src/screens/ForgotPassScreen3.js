import React, { Component } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';

import colors from '../../config/colors';

export default class ForgotPassScreen3 extends Component {
    state = {
        userInput1: '',
        userInput2: '',
        userInput3: '',
    }
    handleContinueRoute = () => {
        this.props.navigation.navigate("Forgot Password 4");
    }
    render() {
        return (
            <View style={styles.background}>
                <Text>Please answer your security questions</Text>
                <View style={styles.inputContainer}>
                        <Text style={styles.text}>Display Security Question 1</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Answer"
                            onChangeText={(userInput) => this.setState({userInput1: userInput})}>
        
                        </TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Display Security Question 2</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Answer"
                            onChangeText={(userInput) => this.setState({userInput2: userInput})}>
        
                        </TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Display Security Question 3</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Answer"
                            onChangeText={(userInput) => this.setState({userInput3: userInput})}>
        
                        </TextInput>
                    </View>
                <Pressable style={({pressed}) => [{
                        backgroundColor: pressed ? colors.grey : colors.primary,},
                        styles.continueButton,]}
                        onPress={this.handleContinueRoute}>
    
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
    }
  });