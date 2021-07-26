import React from 'react';
import {SafeAreaView, StyleSheet, Button, TextInput, Alert} from 'react-native';

export default function ReportAbuseScreen2({ navigation }) {
    return (
        <SafeAreaView
            style = {{
        flexDirection: 'column',
        justifyContent: 'space-around',
        
            }}>        
            <TextInput
            style = {styles.textinput}
            placeholder="Enter the Human Right Violated"
            multiline={true} 
            >
            </TextInput>
            <Button
                title="Don't Know?"
                color = "dodgerblue"
                onPress ={() => navigation.navigate('RecapRightsScreen')}
            />
            <TextInput
            style = {styles.textinput}
            placeholder="Location of Violation"
            multiline={true} 
            >
            </TextInput>
            <TextInput
            style = {styles.textinput}
            placeholder="Date of Violation" 
            multiline={true}
            >
            </TextInput>
            <TextInput
            style = {styles.textinput}
            placeholder=" (Optional) Who committed the violation"
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
    textinput: {
        backgroundColor: 'white',
        width: '80%',
        height: '15%',
        alignSelf: 'center',
    },
  });
