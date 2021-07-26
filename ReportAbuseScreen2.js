import React from 'react';
import {SafeAreaView, Text, TextInput, Button} from 'react-native';

export default function ReportAbuseScreen2({ navigation }) {
    return (
        <SafeAreaView>        
            <Text>
            OOp: 
            </Text>
            <Button
                title="Don't Know?"
                color = "dodgerblue"
                onPress ={() => navigation.navigate('RecapRightsScreen')}
            />
            <Button
                title= "Submit"
                color = "dodgerblue"
            />
        </SafeAreaView>

    )
}
