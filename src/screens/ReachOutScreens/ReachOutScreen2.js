import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, ScrollView} from 'react-native';
// External imports above, internal imports below
import SampleChats from './SampleChats';

import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

export default function ReportOutScreen2({navigation}) {
    const colors = global.isDarkModeEnabled? darkColors: color;
    // Screen styles exist inside function declaration rather than externally or imported
    // to allow toggling between light and dark mode colors dynamically. Styles could be
    // refactored into an extenal function call (see SignupScreen1 for example).
    const styles = StyleSheet.create({
        container: {
            paddingTop: '1%',
            paddingBottom: '10%',
            paddingLeft: '1%',
            backgroundColor: colors.background_screen,
        },
    
        textInput: {
            paddingTop: '1%',
            paddingBottom: '1%',
            paddingLeft: '1%',
            backgroundColor: colors.background_list_item,
            borderRadius: 20,
            marginBottom: 10,
            marginTop: 10,
            width: '90%',
            height: '5%',
            alignSelf: 'center',
            color: colors.text_general
        }
    })

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

