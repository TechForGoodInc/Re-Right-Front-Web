import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, Image, Platform, Alert, View, ScrollView} from 'react-native';
import SampleChats from './SampleChats';

export default function ReportOutScreen2({navigation}) {


    return (
        <SafeAreaView style= {styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Search">
            </TextInput>
            <SafeAreaView>
                <ScrollView>
                    <SampleChats />
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
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        top: '1%',
        paddingTop: '1%',
        paddingBottom: '10%',
        paddingLeft: '1%',
    },

    textInput: {
        paddingTop: '1%',
        paddingBottom: '1%',
        paddingLeft: '1%',
        backgroundColor: 'white',
        width: '80%',
        height: '5%',
        alignSelf: 'center',
    }
})
