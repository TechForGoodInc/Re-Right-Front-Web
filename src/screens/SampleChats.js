import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, Image, Platform, Alert, View} from 'react-native';

const SampleChats = () => {
    return ( 
        <View style = {styles.people}> 
                <Image style = {styles.friendpfp} source = { require("./../../assets/man.png") }
                />
                <View style = {styles.textmessage}>
                    <Text style = {styles.names}>
                        John Smith
                    </Text>
                    <Text style = {styles.textcontents}>
                        Hi!
                    </Text>
                </View>
            </View>  
     );
}
 
export default SampleChats;

const styles = StyleSheet.create({
    friendpfp:{ 
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 500 / 2
    },
    people:{
        paddingTop: '5%',
        paddingLeft: '1%',
        flexDirection: 'row',
    },
    textmessage:{
        paddingLeft:'2%',
        flexDirection: 'column',
    },
    names:{
        fontWeight: 'bold',
    },
    textcontents:{
        paddingTop: '2%',
    }
})