import React from 'react';
import {SafeAreaView, Text, TextInput, Button} from 'react-native';

export default function ReportAbuseScreen1({ navigation }) {
    return (
        <SafeAreaView>        
            <Text
            style = {{
                padding: '2%'
            }}>
            Please Explain hat Happened: 
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
                title="Continue"
                color = "dodgerblue"
                onPress ={() => navigation.navigate('Report Abuse Pg2')}
            />
        </SafeAreaView>

    )
}