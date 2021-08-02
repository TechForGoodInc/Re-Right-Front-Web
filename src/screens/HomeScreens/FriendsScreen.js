//Friends Page
import React from 'react';
import { StyleSheet, TextInput, SafeAreaView, ScrollView } from 'react-native';

import colors from '../../../config/colors';
import SampleFriend from './SampleFriend';
export default function FriendsScreen({navigation}) {
    return (
        <SafeAreaView style= {styles.container}>
            <TextInput style={styles.textInput}
                placeholder="Search">
            </TextInput>
            <ScrollView>
                <SampleFriend/>
                <SampleFriend/>
                <SampleFriend/>
                <SampleFriend/>
                <SampleFriend/>
                <SampleFriend/>
                <SampleFriend/>
                <SampleFriend/>
                <SampleFriend/>
                <SampleFriend/>
            </ScrollView>
        </SafeAreaView>
    );
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