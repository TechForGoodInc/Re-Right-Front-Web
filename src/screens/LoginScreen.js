import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

import colors from '../../config/colors';

export default function LoginScreen({navigation}) {
    const handleForgotPassRoute = () => {
        navigation.navigate("Forgot Password 1");
    }
    const handleContinueRoute = () => {
        // Display error messages and don't navigate if info is incorrect / user not found
        navigation.navigate("Home"); // Need to check if username/email and password are correct
        navigation.reset({index: 0, routes: [{name: 'Home'}]}); // This clearns the nav stack
        // so users can't go back to signup/login/forgot password once they log in
    }
    return (
        <View>
            <Text>Login Screen</Text>
            <Button title="Forgot Password"
                onPress={() => handleForgotPassRoute()}/>
            <Pressable style={({pressed}) => [{
                    backgroundColor: pressed ? colors.grey : colors.primary,},
                    styles.continueButton,]}
                    onPress={() => handleContinueRoute()}>

                    <Text style={styles.text}>Continue</Text>
                </Pressable>
        </View>
    );
}
 
const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
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
      color: 'white',
    },
  });