import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, Image, SafeAreaView, ScrollView, Pressable, TouchableOpacity } from 'react-native'



export default function ProfileScreen({navigation}) {
    const [editMode,setEditMode] = useState(false);
    const editing = () => {
        setEditMode(!editMode);
    }
    if (editMode){
        //turn diplay on for the crosses
    }
    //query the database for tags
    const [tags,setTags] = useState(["#AssaultSurvivor", "#Feminist", "#LGBTQ", "#Activist"]);
    //query for deleting a tag from db
    const deleteTag = (tag) => {
        function checkTag(searchedTag){
            return searchedTag===tag;
        }
        const index = tags.findIndex(checkTag);
        const temporaryTags = tags;
        temporaryTags.splice(index,1);
        setTags(temporaryTags);
        setTagList(() => {
            return tags.map( (tag) => {
                return (
                    <View style = {styles.tagView}> 
                    <Text> {tag} </Text>
                    <Pressable onPress = {() => {deleteTag(tag)}}> 
                        <Text style = {styles.crossButton} > X </Text>
                    </Pressable>
                    </View>
                );
            });
        });
    }
    
    var styles = StyleSheet.create({
        container:{
            flex: 1
        },
        header: {
            alignContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            paddingTop: '5%'
        },
        profileImage: {
            width: '20%',
            height: '50%',
        },
        bioAndTags: {
            paddingTop: '2%',
        },
        tagView: {
            width: '40%',
            height: '90%',
            borderWidth: 2,
            borderRadius: 10,
            marginHorizontal:'2%'
        },
        crossButton: {
            color: editMode ? 'blue' : 'red'
        },
        tagsGroup: {
            flexDirection: 'row',
            width: '50%'
        }
    });
    const [tagList, setTagList] = useState(() => {
        return tags.map( (tag) => {
            return (
                <View style = {styles.tagView}> 
                <Text> {tag} </Text>
                <Pressable onPress = {() => {deleteTag(tag)}}> 
                    <Text style = {styles.crossButton} > X </Text>
                </Pressable>
                </View>
            );
        });
    });
    return (
        <ScrollView style={styles.container}>
            <View> 
            <TouchableOpacity  onPress={() => {editing()} } title ="Edit "> 
                <Text style={{color:editMode? "red":"blue",paddingHorizontal:"45%",paddingTop:"5%"}}> Edit </Text> 
            </TouchableOpacity>
            </View>
            <View style = {styles.header}>
                <Image style = {styles.profileImage}source={require('./../../../assets/man.png')}/> 
                <Text> Display Name</Text>
            </View>
            <View style = {styles.bioAndTags}>
                <Text style = {{fontWeight:'700',paddingBottom:'5%'}} > Bio: </Text>
                <Text> Bio from account</Text>
                <Text style = {{fontWeight:'700',paddingVertical:'5%'}} > Tags: </Text>
                <View style={styles.tagsGroup}>
                    {tagList}
                </View>
            </View>

        
        <Button title="Settings" onPress={ () => navigation.navigate('Account')}/>
        </ScrollView>
    );
}