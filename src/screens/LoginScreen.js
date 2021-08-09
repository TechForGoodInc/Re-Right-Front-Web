import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import React, {useEffect, useState} from 'react';
import { Platform, View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native';

import color from "../../config/colors";
import darkColors from "../../config/darkColors";
import '../../config/global';
import GetGlobalStyles from '../../config/GetGlobalStyles';

export default function LoginScreen({navigation}) {
    //getting the dimensions and the orientation
    const { landscape, portrait } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    // Dynamic global styles
    const [styles, setStyles] = useState(StyleSheet.create( 
        GetGlobalStyles(landscape, width, height) 
    ));
    if (landscape || width > height ){
        () => {
        setStyles(StyleSheet.create( 
            GetGlobalStyles(landscape, width, height) 
        ))
    }} 

    const colors = global.isDarkModeEnabled ? darkColors : color;

    const localStyles = StyleSheet.create({
         links: {
             justifyContent: 'flex-end',
             alignItems: 'center',
             flex: 0.5, 
             
         },
         logo: {
            resizeMode: 'contain', 
            ...Platform.select({
                web: {
                  width: '25%',
                  height: '75%',
                },
                default: {
                  width: (landscape || width > height) ? '100%' : '55%',
                  height: (landscape || width > height) ? '100%': '50%',
                }
            })
         },
         inputFields: {
             height: '18%',
             margin: '1%',
             width: '90%',
             borderWidth: 2,
             borderColor: colors.border_input_text,
             alignSelf: 'center',
             fontSize: 16, 
             borderRadius: 10,
             padding: 20,
             color: colors.text_general
         },
          buttonContainer: {
            flexDirection: 'row',
          },      
          linkView: {
              alignItems: 'center',
              bottom: '10%',
              width: '100%'
          }, 
      });
  const handleForgotPassRoute = () => {
      navigation.navigate("Forgot Password 1");
  }
  const handleLoginRoute = () => {
    // When a user logs in, clear the stack and place the Home page on the stack (users shouldn't
    // be able to go back to login/signup/forgot password pages once they log in)
    navigation.reset({
        index: 0,
        routes: [{name: 'Home',}],
      });
        // Need to check if username/email and password are correct
        // Display error messages and don't navigate if info is incorrect / user not found   
  }
  const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
     
  return (
    
    <View style = {styles.screenBackground}>
        <View style={styles.header}>
            <Image source={require("../../assets/rerightlogo.png")} style = {localStyles.logo}/>
        </View>

        <View style = {styles.loginInputView}>
            <Text style = {styles.headerText}> Login in with your account: </Text>
            <Text style={styles.label}> Username/Email:  </Text>
            <TextInput 
            style={styles.inputText}
            onChangeText={onChangeUsername}
            value={username}
            placeholder = ' Username/Email'
            textContentType='username'
            autoCompleteType='email' 
            autoCapitalize='none'
             />
            <Text style={styles.label} > Password:  </Text>
            <TextInput 
             style={styles.inputText}
             onChangeText={onChangePassword}
             value={password}
             secureTextEntry={true} 
             autoCompleteType='password' 
             autoCapitalize='none'
             textContentType = 'password'
             placeholder = ' Password'/>
        </View>

        <View style = {localStyles.links}>
            <View style = {localStyles.linkView}>
                <Text 
                    style={styles.hyperlink}
                    onPress={() => handleForgotPassRoute()}>
                    Forgot Password
                </Text>
            </View>
        </View>
        <Pressable style={({pressed}) => [{
            backgroundColor: pressed ? colors.button_pressed : colors.button_login,},
            styles.continueButton,]}
            onPress={() => handleLoginRoute()}>
            <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
    </View>
  );
}
 





