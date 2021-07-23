import React, { useState } from 'react';
import colors from '../../config/colors';
import { Pressable, TouchableWithoutFeedback,Keyboard, View, StyleSheet, Text, Button, SafeAreaView, TextInput } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import GetSignUp1Style from './styles/SignUp1Css';

export default function SignupScreen1({navigation}) {
    //styles are in a sperate folder 
    const styles = StyleSheet.create( 
        GetSignUp1Style(colors) 
    );
    //setting up the user input variables
    const [email, setEmail] = useState('');
    const [username, setUSername] = useState('');
    const [dob, setDob] = useState('');

    //checking if user exists and showing an error if it does

    //
    const handleContinuePress = () => {
        navigation.navigate("Signup 2");
    }

    return (
        <View style={styles.screenBackground}>
            {/*  Wrapping the code with TouchableWithoutFeedback dismisses the keyboard when the user taps out of the input box*/}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style = { styles.container} > 
                    <View style = {styles.header}>
                        <Text 
                            style = {styles.headerTitle}>
                            Getting Started
                        </Text>
                        <Text 
                            style = {styles.headerText} >
                            Welcome to Re-Right. Create a free account to access all of the amazing features this app has :)
                        </Text>
                        <Text 
                            style = {styles.linkText} 
                            onPress={() => navigation.navigate("Login")} >
                            Already have an account?
                        </Text>
                    </View>
                    <View styles = { styles.details }>
                        <View>
                            <Text 
                                style={styles.label}>
                                Email: 
                            </Text>
                            <TextInput 
                                style={styles.inputText} 
                                keyboardType = 'email-address'     // Works on all platforms
                                textContentType = 'emailAddress'  // Only for iOS
                                autoCompleteType='email'         // Only for Android
                                autoCapitalize='none'           // Works on all platforms
                                placeholder="Enter Your E-mail ID" />
                        </View>
                        <View>
                            <Text 
                                style={styles.label} >
                                Username: 
                            </Text>
                            <TextInput 
                                style={styles.inputText} 
                                textContentType='username'   // Only for iOS
                                autoCompleteType="username" // Only for Android
                                autoCapitalize='none'
                                placeholder="Create a Username" />
                        </View>
                        <View>
                            <Text 
                                style={styles.label}>
                                Date of Birth: 
                                </Text>
                            <TextInput 
                                style={styles.inputText} 
                                placeholder="Date of Birth" />
                        </View>
                        <View>
                            <Text style={styles.label}>Date of Birth: </Text>
                            <TextInput style={styles.inputText} placeholder="Date of Birth" />
                        </View>
                    </View>
                    <View styles = { styles.password }>
                        <View>
                            <Text 
                                style={styles.label}>
                                Password: 
                            </Text>
                            <TextInput 
                                secureTextEntry={true} 
                                textContentType = "newPassword" 
                                autoCompleteType='password' 
                                style={styles.inputText} 
                                placeholder="Create a Password" 
                                autoCapitalize='none'/>
                        </View>
                        <View>
                            <Text 
                                style={styles.label}>
                                Confirm Password: 
                            </Text>
                            <TextInput 
                                secureTextEntry={true} 
                                textContentType = "newPassword" 
                                autoCompleteType='password' 
                                autoCapitalize='none'
                                style={styles.inputText} 
                                placeholder="Confirm your Password"/>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
            <Pressable style={({pressed}) => [{
                backgroundColor: pressed ? colors.grey : colors.blue,},
                styles.continueButton,]}
                onPress={() => handleContinuePress()}>

                <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
        </View>
    );
    
}

