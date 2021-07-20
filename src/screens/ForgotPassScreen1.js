import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

import colors from '../../config/colors';

export default function ForgotPassScreen1({navigation}) {
    const handleLoginRoute = () => {
        navigation.navigate("Login");
    }
    const handleSignupRoute = () => {
        navigation.navigate("Signup");
    }
    return (
        <View style={styles.background}>
            <Text>Logged Out Screen</Text>
            <View style={styles.buttonContainer}>
                <Pressable style={({pressed}) => [{
                    backgroundColor: pressed ? colors.grey : colors.secondary,},
                    styles.signupButton,]}
                    onPress={() => handleSignupRoute()}>

                    <Text style={styles.text}>To Signup</Text>
                </Pressable>
                <Pressable style={({pressed}) => [{
                    backgroundColor: pressed ? colors.grey : colors.primary,},
                    styles.loginButton,]}
                    onPress={() => handleLoginRoute()}>

                    <Text style={styles.text}>To Login</Text>
                </Pressable>
            </View>

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
    loginButton: {
        width: "50%",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
    },
    signupButton: {
        width: "50%",
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