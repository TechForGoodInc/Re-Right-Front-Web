import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {Link} from 'react-router';

export default function HomeScreen({navigation}) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Log Out"
                onPress={() => navigation.navigate("Logged Out")}/>
        </View>
    );
}
 
