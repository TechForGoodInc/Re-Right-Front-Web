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
    people:{
        flexDirection: 'row',
        paddingTop: '4%',
        paddingLeft: '1%',
        paddingBottom: '4%',
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    friendpfp:{ 
        flexDirection: 'row',
        backgroundColor: 'white',
        height:'100%',
        width: '11%',
        resizeMode: 'contain',
        borderRadius: 500 / 2,
    },
    textmessage:{
        flex: 7,
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
        opacity: 0.5,
        height:'40%',
        width:'5%',
        right: '3%'
    }
})