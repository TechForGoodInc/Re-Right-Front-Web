import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

import colors from '../../config/colors';

export default function ForgotPassScreen4({navigation}) {
    const handleContinueRoute = () => {
        navigation.navigate("Login");
    }
    return (
        <View>
            <Text>Enter new password and confirm it</Text>
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