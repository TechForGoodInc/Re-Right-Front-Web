import React from 'react';
import {SafeAreaView, Text, TextInput, Pressable, StyleSheet} from 'react-native';

import colors from '../../../config/colors';

export default function ReportAbuseScreen1({ navigation }) {
    const handleContinuePress = () => {
        navigation.navigate("Incident Info")
    }
    return (
        <SafeAreaView style={styles.screenBackground}>        
            <Text style={styles.prompt}>
            Please Explain What Happened: 
            </Text>
            <TextInput style={styles.textInput}
                multiline={true}
                placeholder="Let us know your story..." 
            />
            <Pressable style={({pressed}) => [{
                backgroundColor: pressed ? colors.button_pressed : colors.button_continue,},
                styles.continueButton,]}
                onPress={() => handleContinuePress()}>
                <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        padding: '2%',
        width: '90%',
        height: '70%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2%',
    },
    prompt: {
        padding: '2%'
    },
    screenBackground: {
        justifyContent: 'space-between',
        flex: 1,
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
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
});