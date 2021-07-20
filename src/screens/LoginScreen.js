import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {Link} from 'react-router';

export default function LoginScreen({navigation}) {
    return (
        <View>
            <Text>Login Screen</Text>
            <Button title="Login"
                onPress={() => navigation.navigate("Home")}/>
        </View>
    );
}
 
