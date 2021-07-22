import React from 'react';
import { View, Text, Button, StyleSheet, Pressable, Image, TextInput } from 'react-native';

import colors from '../../config/colors';

export default function LoginScreen({navigation}) {

  const handleForgotPassRoute = () => {
      navigation.navigate("Forgot Password 1");
  }
  const handleSignUpRoute = () => {
   navigation.navigate("Signup 1");
}
 
  const handleContinueRoute = () => {
 
      navigation.navigate("Home"); // Need to check if username/email and password are correct
      // Display error messages and don't navigate if info is incorrect / user not found   
  }
  const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
     
  return (
    <View style = {styles.background}>

        <View style = {styles.header}>
          <Image source={require("../../assets/FriendsIcon.png")} style = {styles.logo}/>
        </View>

        <View style = {styles.inputbar}>
           <Text style = {styles.headertext}> Login in with your account: </Text>

            <TextInput
             style={styles.username}
             onChangeText={onChangeUsername}
             value={username}
             placeholder = ' Username'/>
 
            <TextInput style={styles.password}
             style={styles.password}
             onChangeText={onChangePassword}
             value={password}
             placeholder = ' Password'/>
        </View>

        <View style = {styles.links}>
            <View style = {styles.linkView}>
                <Text style={styles.linkText}
                    onPress={() => handleSignUpRoute()}>
                        Create Account
                </Text>
                <Text style={styles.linkText}
                    onPress={() => handleForgotPassRoute()}>
                        Forgot Password
                </Text>
            </View>

            <Pressable style={({pressed}) => [{

                 backgroundColor: pressed ? colors.grey : colors.primary,},
                 styles.continueButton,]}
                 onPress={() => handleContinueRoute()}>

                 <Text style={styles.text}>Log In</Text>

            </Pressable>

        </View>

    </View>
  );
}
const styles = StyleSheet.create({

  background: {
      flex: 1,
      backgroundColor: colors.white,
      flexDirection: 'column',
  },
 
   header: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
   },
 
   inputbar: {
       flex: 2,
       justifyContent: 'center',
   },
 
   links: {
       justifyContent: 'flex-end',
       alignItems: 'center',
       flex: 1, 
   },
 
   logo: {
      width: '55%',
      height: '30%',  
   },
 
   username: {
       height: '18%',
       margin: 20,
       width: '90%',
       borderWidth: 1,
       alignSelf: 'center',
       fontSize: 25, 
   },

   password: {
       height: '18%',
       margin: 20,
       width: '90%',
       borderWidth: 1,
       alignSelf: 'center',
       fontSize: 25,
   },
  
    buttonContainer: {
      flexDirection: 'row',
    },

    continueButton: {
      width: "100%",
      height: 70,
      justifyContent: "center",
      alignItems: "center",
    },

    text: {
       fontSize: 20,
       lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
 
  headertext: {
       fontSize: 25,
       top: '0%',
       alignSelf: 'flex-start',
       left: '5%', 
    },

    linkView: {
        alignItems: 'center',
        bottom: '10%',
    },
    linkText: {
        color: colors.blue,
        fontSize: 18,
        padding: '3%',
    }
 
});
 
 





