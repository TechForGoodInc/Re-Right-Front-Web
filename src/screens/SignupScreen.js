import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default function SignupScreen({navigation}) {
    return (
        <View>
            <Text>Sign Up Screen</Text>
            <Button title="Signup"
                onPress={() => navigation.navigate("Login")}/>
        </View>
    );
}
 
