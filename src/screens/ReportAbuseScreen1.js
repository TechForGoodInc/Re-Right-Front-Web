import React from 'react';
import {SafeAreaView, Text, TextInput, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RAScreen2 from './Chat.js';


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
                title="Submit"
                color = "dodgerblue"
                onClick ={() => navigation.navigate('RAScreen2')}
                accessibilityLabel="Learn more about this purple button"
            />
        </SafeAreaView>

    )
}
const Stack = createStackNavigator();
function Transfer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Friends" component={FriendsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}