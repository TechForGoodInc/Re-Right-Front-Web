import React, { useState } from 'react';
import colors from '../../config/colors';
import { Pressable, TouchableWithoutFeedback,Keyboard, View, StyleSheet, Text, Button, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native';
import GetSignUp1Style from './styles/SignUp1Css';
import KeyboardViewStyles from './styles/KeyboardViewStyles';

export default function SignupScreen1({navigation}) {
    //styles are in a sperate folder 
    const [styles,setStyles] = useState(StyleSheet.create( 
        GetSignUp1Style(colors) 
    ));
    //setting up the user input variables
    const [email, setEmail] = useState('');
    const [username, setUSername] = useState('');
    const [dob, setDob] = useState('');

    //checking if user exists and showing an error if it does

    //
    const handleContinuePress = () => {
        navigation.navigate("Signup 2");
    }
    
    const keyboardInputMode = () => {
        setStyles(StyleSheet.create( 
            KeyboardViewStyles() 
        ))
    }
    const outOfKeyboardInputMode = () => {
        Keyboard.dismiss;
        setStyles(StyleSheet.create( 
            GetSignUp1Style(colors)
        ))
    }

    return (
        <KeyboardAvoidingView style={styles.screenBackground}>
            {/*  Wrapping the code with TouchableWithoutFeedback dismisses the keyboard when the user taps out of the input box*/}
            <TouchableWithoutFeedback onPress={ () => { 
                Keyboard.dismiss;
                setStyles(StyleSheet.create( 
            GetSignUp1Style(colors)
        )) } }>
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
                                <TextInput  onTouchStart = { () => { keyboardInputMode() } }
                                    style= {styles.inputText} 
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
                                <TextInput onTouchStart = { () => { keyboardInputMode() } }
                                    style= {styles.inputText} 
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
                                <TextInput  onTouchStart = { () => { keyboardInputMode() } }
                                    style= {styles.inputText} 
                                    placeholder="Date of Birth" />
                            </View>
                        </View>
                        <View styles = { styles.password }>
                            <View>
                                <Text 
                                    style={styles.label}>
                                    Password: 
                                </Text>
                                <TextInput onTouchStart = { () => { keyboardInputMode() } }
                                    style= {styles.inputText} 
                                    secureTextEntry={true} 
                                    textContentType = "newPassword" 
                                    autoCompleteType='password' 
                                    placeholder="Create a Password" 
                                    autoCapitalize='none'/>
                            </View>
                            <View>
                                <Text 
                                    style={styles.label}>
                                    Confirm Password: 
                                </Text>
                                <TextInput  onTouchStart = { () => { keyboardInputMode() } }
                                    style= {styles.inputText}  
                                    secureTextEntry={true} 
                                    textContentType = "newPassword" 
                                    autoCompleteType='password' 
                                    autoCapitalize='none'                                   
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
        </KeyboardAvoidingView>
    );
    
}

