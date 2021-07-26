import React from 'react';
import {SafeAreaView, Text, TextInput, Button} from 'react-native';


export default function ReportAbuseScreen1() {
    return (
        <SafeAreaView>        
            <Text
            style = {{
                padding: '2%'
            }}>
            Please Explain What Happened: 
            </Text>
            <TextInput
                style = {{
                    backgroundColor: 'white',
                    padding: '2%',
                    width: '90%',
                    height: '90%',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                multiline={true}
                placeholder="Let us know your story..." 
            />
            <Button
                title="Submit"
                color = "dodgerblue"
                accessibilityLabel="Learn more about this purple button"
            />
        </SafeAreaView>

    )
}