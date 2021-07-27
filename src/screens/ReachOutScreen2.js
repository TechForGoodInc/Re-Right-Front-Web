import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, Image, Platform, Alert, View, ScrollView} from 'react-native';
import SampleChats from './SampleChats';

export default function ReportOutScreen2() {
    return (
        <SafeAreaView>
            <TextInput
                style={styles.textInput}
                placeholder="Search">
            </TextInput>
                <ScrollView style="styles.feed">
                    <SampleChats/>
                    <SampleChats/>
                    <SampleChats/>
                    <SampleChats/>
                    <SampleChats/>
                    <SampleChats/>
                    <SampleChats/>
                    <SampleChats/>
                    <SampleChats/>
                    <SampleChats/>
                    <SampleChats/>
                    <SampleChats/>
                    <SampleChats/>
                </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        width: '90%',
        paddingLeft: '2%',
        height: 50,
        alignSelf: 'center',
        marginTop: '5%',
    }
})
