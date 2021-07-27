import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

export default function SampleChats ({navigation}) {
    return ( 
        <TouchableOpacity 
        style = {styles.people}
        onPress={() => navigation.navigate("Texting")}> 
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
        </TouchableOpacity>  
     );
}
const styles = StyleSheet.create({
    friendpfp:{ 
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 500 / 2,
    },
    people:{
        paddingTop: '3%',
        paddingLeft: '1%',
        paddingBottom: '3%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'gray',
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