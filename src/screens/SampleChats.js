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
                <Image style={styles.arrow} source={require('./../../assets/right-arrow.png')}
      />
        </View>  
     );
}
 
export default SampleChats;

const styles = StyleSheet.create({
    friendpfp:{ 
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 500 / 2,
    },
    people:{
        paddingTop: '4%',
        paddingLeft: '1%',
        paddingBottom: '4%',
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
    },
    arrow:{
        alignSelf: 'center',
        left: 225, 
        opacity: 0.5,
        width: 20,
        height: 20,
    }
})