import React, { Component } from 'react';
import {Button, Text, View } from 'react-native';
import {Link} from 'react-router';

export default function LoggedOutScreen({navigation}) {
    return (
        <View>
            <Text>Logged Out Screen</Text>
            <Button title="To Login"
                onPress={() => navigation.navigate("Login")}/>
            <Button title="To Signup"
                onPress={() => navigation.navigate("Signup")}/>
        </View>
        
    );
}
 
