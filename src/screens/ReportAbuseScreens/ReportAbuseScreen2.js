import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, Pressable, Platform, Alert} from 'react-native';

import colors from '../../../config/colors';

export default function ReportAbuseScreen2({ navigation }) {
    const handleSubmitPress = () => {
        if (Platform.OS === 'web') {
            alert("Report Successfully Submitted");
        } else {
            Alert.alert("Success!", "Report Submitted");
        }
        // Resets the reportAbuseStack to the base page
        navigation.reset({
            index: 0,
            routes: [{name: 'Report Abuse'}],
          });
        // Jumps to the Home page of the hamburger menu
        navigation.jumpTo("Home");
    }
    return (
        <SafeAreaView style={styles.screenBackground}>
            <Text
                style = {styles.pretext}
            >
                Human Right Violated
            </Text>        
            <TextInput
            style = {styles.textinput}
            placeholder=" Enter the Human Right Violated"
            multiline={true} 
            >
            </TextInput>

            <Text style={styles.linkText}
                onPress ={() => navigation.navigate('Recap Rights')}>
                    Don't Know?
            </Text>

            <Text
                style = {styles.pretext}
            >
                Location
            </Text>     
            <TextInput
            style = {styles.textinput}
            placeholder=" Enter the Location of the Violation"
            multiline={true} 
            >
            </TextInput>


            <Text
                style = {styles.pretext}
            >
                Date of Occurence
            </Text>   
            <TextInput
            style = {styles.textinput}
            placeholder=" Enter the Date of the Violation" 
            multiline={true}
            >
            </TextInput>


            <Text
                style = {styles.pretext}
            >
                Offender?
            </Text>   
            <TextInput
            style = {styles.textinput}
            placeholder=" Describe the Person Who Committed the Crime"
            multiline={true}
 
            >
            </TextInput>
            <Pressable style={({pressed}) => [{
                backgroundColor: pressed ? colors.grey : colors.blue,},
                styles.submitButton,]}
                onPress={() => handleSubmitPress()}>
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    screenBackground: {
        justifyContent: 'space-between',
        flex: 1,
    },
    pretext:{
        alignSelf: 'center',
    },
    textinput: {
        backgroundColor: 'white',
        width: '80%',
        height: '15%',
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        },
    submitButton: {
        width: "100%",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
    },
    linkText: {
        color: colors.blue,
        fontSize: 18,
        marginBottom: '2%',
        alignSelf: 'center',
    },
  });
