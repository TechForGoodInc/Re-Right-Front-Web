//Friends Page
import React from 'react';
import { View,StyleSheet, Text, Image, FlatList, TextInput} from 'react-native';
import colors from '../../../config/colors';
const data = [
    { id: '1', title: 'Abhinav Gupta', mutual: '25' },
    { id: '2', title: 'Nyun Ei Hlaing', mutual: '23' },
    { id: '3', title: 'Nicolas Prate', mutual: '12' },
    { id: '4', title: 'Nathan Cook', mutual: '30' },
    { id: '5', title: 'Abhinav Gupta', mutual: '25' },
    { id: '6', title: 'Nyun Ei Hlaing', mutual: '23' },
    { id: '7', title: 'Nicolas Prate', mutual: '12' },
    { id: '8', title: 'Nathan Cook', mutual: '30' },
    { id: '9', title: 'Abhinav Gupta', mutual: '25' },
    { id: '10', title: 'Nyun Ei Hlaing', mutual: '23' },
    { id: '11', title: 'Nicolas Prate', mutual: '12' },
    { id: '12', title: 'Nathan Cook', mutual: '30' },
    { id: '13', title: 'Abhinav Gupta', mutual: '25' },
    { id: '14', title: 'Nyun Ei Hlaing', mutual: '23' },
    { id: '15', title: 'Nicolas Prate', mutual: '12' },
    { id: '16', title: 'Nathan Cook', mutual: '30' },
]

export default function FriendsScreen() {

    return (
        <View style={styles.container}>
                <View style = {styles.searchBar}>
                <Image style={styles.searchIcon} source={require('../../../assets/search.png')}/>
                    <TextInput 
                        style= {styles.inputBar}
                        placeholder = "Search Friends">
                    </TextInput>
                </View>
            
            <View style ={styles.friendsContainer}>
                <Text style = {styles.friendsNum}>583 Friends</Text>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Image style = {styles.profilePic} source = { require("../../../assets/userpfp.png") }/>
                            <View style = {{marginLeft:'3%'}}>
                                <Text style= {{fontSize:15,}}>{item.title}</Text>
                                <Text style={{paddingTop: 5, color: colors.text_subtitle}}>{item.mutual} mutual friends</Text>
                            </View>
                        
                        </View>
                    )}
                />
            </View> 
        
      </View>
    ); 
                    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.background_screen,
    },
    searchBar: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 30,
        flex: 1,
        borderRadius: 20,
        borderWidth: 0.2,
    },
    searchIcon: {
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 5,
    },
    inputBar: {
        flex: 1,
        padding: 10,
        paddingLeft: 30,     
    },
    friendsContainer: {
        width: '100%',
        marginTop: "5%",
        flex: 20,
    },
    friendsNum: {
        alignSelf: 'flex-start',
        fontSize: 20,
        marginLeft: '5%',
    },
    listItem: {
        borderBottomWidth: 0.5,
        paddingTop: 30,
        paddingBottom: 20,
        width: '100%',
        flexDirection: 'row',
        flex: 1,
    },
    profilePic: {
        width: '10%',
        height: '200%',
        resizeMode: 'contain',
        borderRadius: 100,
        marginLeft: '5%',
        alignSelf: 'center',
    },
    
  });

