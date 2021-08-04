//Friends Page
import React, {useState} from 'react';
import { View,StyleSheet, Text, Image, FlatList, TextInput, TouchableOpacity} from 'react-native';
import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

const data = [
    { id: '0', title: 'Abhinav Gupta', mutual: '25' },
    { id: '1', title: 'Nyun Ei Hlaing', mutual: '23' },
    { id: '2', title: 'Nicolas Prate', mutual: '12' },
    { id: '3', title: 'Nathan Cook', mutual: '30' },
    { id: '4', title: 'Abhinav Gupta', mutual: '25' },
    { id: '5', title: 'Nyun Ei Hlaing', mutual: '23' },
    { id: '6', title: 'Nicolas Prate', mutual: '12' },
    { id: '7', title: 'Nathan Cook', mutual: '30' },
    { id: '8', title: 'Abhinav Gupta', mutual: '25' },
    { id: '9', title: 'Nyun Ei Hlaing', mutual: '23' },
    { id: '10', title: 'Nicolas Prate', mutual: '12' },
    { id: '11', title: 'Nathan Cook', mutual: '30' },
    { id: '12', title: 'Abhinav Gupta', mutual: '25' },
    { id: '13', title: 'Nyun Ei Hlaing', mutual: '23' },
    { id: '14', title: 'Nicolas Prate', mutual: '12' },
    { id: '15', title: 'Nathan Cook', mutual: '30' },
]

export default function FriendsScreen() {
    const colors = global.isDarkModeEnabled? darkColors: color; 
    //all the styles are here sorry for the mess but we need this for dark mode to work
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
            borderColor: colors.border
        },
        searchIcon: {
            position: 'absolute',
            alignSelf: 'center',
            marginLeft: 5,
            tintColor: colors.tintColor
        },
        inputBar: {
            flex: 1,
            padding: 10,
            paddingLeft: 30,  
            color: colors.text_general   
        },
        friendsContainer: {
            width: '100%',
            marginTop: "5%",
            flex: 20,
            backgroundColor: colors.background_list_item,
        },
        friendsNum: {
            alignSelf: 'flex-start',
            fontSize: 20,
            marginLeft: '5%',
            color: colors.text_general,
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
        removeButton : {
            padding: 5,
            margin: 20,
            height: '60%',
            width: '20%',
            backgroundColor:colors.primary,
            alignSelf: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: 0,
        }
      });
    const [list, setList] = useState(data);
    const handleRemoveFriend = (id) => {
        var newList = list;
        var indexToRemove = 0;
        for (var i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                indexToRemove = i;
            }
        }
        newList.splice(indexToRemove,1);
        setList(newList);
        console.log(JSON.stringify(list));
        console.log(id);
    }
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
                <Text style = {styles.friendsNum}>{data.length} Friends</Text>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Image style = {styles.profilePic} source = { require("../../../assets/userpfp.png") }/>
                            <View style = {{marginLeft:'3%'}}>
                                <Text style= {{fontSize:15, color: colors.text_general, fontWeight: '700' }}>{item.title}</Text>
                                <Text style={{paddingTop: 5, color: colors.text_subtitle}}>{item.mutual} mutual friends</Text>
                            </View>
                            <TouchableOpacity
                                onPress={()=> handleRemoveFriend(item.id)}
                                style={styles.removeButton}>
                                <Text style = {{color: colors.white, fontSize: 10, fontWeight: 'bold'}}>Remove Friend</Text>
                            </TouchableOpacity>

                        </View>
                    )}
                />
            </View> 
        
      </View>
    ); 
}



