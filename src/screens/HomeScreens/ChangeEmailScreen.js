import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import React from 'react';
import { Platform, View, Text, Button, StyleSheet, TextInput } from 'react-native';
import colors from '../../../config/colors';

export default function ChangeUsernameScreen() {
    //getting the dimensions and the orientation
    const { landscape, portrait } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    
    //styles are here
    const styles = StyleSheet.create({

        background: {
            flex: 1,
            backgroundColor: colors.white,
            flexDirection: 'column',
        },
       
         header: {
             flex: 0.2,
             alignItems: 'center',
             justifyContent: 'center',
         },
       
         inputbar: {
             flex: 1,
             justifyContent: 'space-around',
             
             ...Platform.select({
                web: {
                    marginLeft: '30%',
                    marginRight: '30%',
                },
                default: {
                    marginLeft: '5%',
                    marginRight: '5%',
                },
             }),
         },
       
         button: {
             justifyContent: 'flex-end',
             alignItems: 'center',
             flex: 0.5,
             bottom: '20%',
             color: colors.blue, 
             
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
             borderColor: colors.light_grey,
             alignSelf: 'center',
             fontSize: 16, 
             borderRadius: 10,
             padding: 20,
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
      
          buttonText: {
            fontSize: 20,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
          },
       
        headertext: {
            fontWeight: '700',
            fontSize: 25, 
            color: colors.blue,
            marginBottom: '4%',
          },
      
          linkView: {
              alignItems: 'center',
              bottom: '10%',
              width: '100%'
          },
          linkText: {
              color: colors.blue,
              fontSize: 18,
              marginBottom: '2%',
          }
       
      });
  const [email, onChangeUsername] = React.useState(null);     
  return (
    
    <View style = {styles.background}>
        <View style={styles.header}>
        </View>

        <View style = {styles.inputbar}>
            <Text style = {styles.headertext}> Change Your Email: </Text>
            
            <Text style={styles.labels}> Enter your new desired Email:  </Text>
            <TextInput
             style={styles.inputFields}
             placeholder = ' New Email'
             />
             <Text style={styles.labels}> Confirm your new desired Email:  </Text>
            <TextInput
             style={styles.inputFields}
             onChangeText={onChangeUsername}
             value={email}
             placeholder = ' Confirm New Email'
             textContentType='username'
             autoCompleteType='email' 
             autoCapitalize='none'
             />
            <Text style={styles.labels} > Enter your password to ensure the change is saved:  </Text>
            <TextInput 
             style={styles.inputFields}
             secureTextEntry={true} 
             autoCompleteType='password' 
             autoCapitalize='none'
             textContentType = 'password'
             placeholder = ' Password'/>
        </View>

        <View style = {styles.button}>
            <Button
                title="Update Email"
                accessibilityLabel="Learn more about this purple button"
                onPress={() =>alert("Email Successfully Updated")}
            />
        </View>
    </View>
  );
}
 





