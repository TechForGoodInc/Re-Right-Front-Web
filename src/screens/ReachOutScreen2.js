import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, Image, Platform, Alert, View} from 'react-native';

export default function ReportOutScreen2() {
    return (
        <SafeAreaView>
            <TextInput
                style={styles.textInput}
                placeholder="Search">
            </TextInput>
            <View style = {styles.people}> 
            <Image style = {styles.friendpfp} source = { require("./../../assets/man.png") }
            />
            <View style = {styles.textmessage}>
                <Text>
                    John Smith
                </Text>
                <Text>
                    John Smith
                </Text>
            </View>
            </View>      
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        width: '90%',
        paddingLeft: '2%',
        height: '22%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },
    friendpfp:{ 
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 500 / 2
    },
    people:{
        flexDirection: 'row',
    },
    textmessage:{
        paddingLeft:'2%',
        flexDirection: 'column',
    }
})
