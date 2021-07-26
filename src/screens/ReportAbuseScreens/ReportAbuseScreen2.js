import React from 'react';
import {SafeAreaView, StyleSheet, Button, TextInput, Text} from 'react-native';

export default function ReportAbuseScreen2({ navigation }) {
    return (
        <SafeAreaView
            style = {{
        flexDirection: 'column',
        justifyContent: 'space-around',
        
            }}>
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


            <Button
                title="Don't Know?"
                color = "dodgerblue"
                onPress ={() => navigation.navigate('Recap Rights')}
            />


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
            <Button
                title= "Submit"
                color = "dodgerblue"
                onPress = {() => {
                    alert('Report of Abuse and Information of Incident Have been Submitted');
                }}
            />
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    pretext:{
        alignSelf: 'center',
    },
    textinput: {
        backgroundColor: 'white',
        width: '80%',
        height: '15%',
        alignSelf: 'center',
    },
  });
