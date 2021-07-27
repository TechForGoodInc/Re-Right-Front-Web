import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, Pressable, Platform, Alert} from 'react-native';

export default function ReportOutScreen2() {
    return (
        <SafeAreaView>
            <TextInput
                style={styles.textInput}
                placeholder="Search">
            </TextInput>      
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        padding: '5%',
        width: '90%',
        height: '10%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
    }
})
