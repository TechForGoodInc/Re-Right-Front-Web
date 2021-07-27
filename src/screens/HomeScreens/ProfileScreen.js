import React, { useState } from 'react';
import prompt from 'react-native-prompt-android';
import { Button, Text, View, StyleSheet, Image, SafeAreaView, ScrollView, Pressable, TouchableOpacity, TextInput, Alert } from 'react-native'
import { Prompt } from 'react-router-dom';
import colors from '../../../config/colors';
import SamplePost from './SamplePost';
var styles = StyleSheet.create({
    container:{
       
    },
    header: {
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: '5%'
    },
    profileImage: {
        width: 100,
        height: 110,
    },
    bioAndTags: {
        paddingTop: '1%',
        paddingHorizontal: '5%',
    },
    postBox: {
        paddingTop: '1%',
        paddingHorizontal: '5%',
    },
    tagView: {
        width: '40%',
        height: '90%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.light_grey,
        marginHorizontal:'2%'
    },
    allTags: {
        width: '100%',
    },
    tagsGroup: {
        flexDirection: 'row',
        width: '60%',
        maxHeight: '70%',
        marginTop: '4%'
    }
});


export default function ProfileScreen({navigation}) {
    const [editMode,setEditMode] = useState(false);
    const [displayName, setDisplayName] = useState('Display Name');
    const [bio, setBio] = useState('Bio from database');
    //query the database for tags
    const [tags,setTags] = useState(["#AssaultSurvivor", "#Feminist", "#LGBTQ", "#Activist"]);
    const [tagList, setTagList] = useState((editMode) => {
        return tags.map( (tag) => {
            return (
                <View style = {styles.tagView}> 
                <Text> {tag} </Text>
                <Pressable onPress = {() => {deleteTag(tag)}}> 
                    <Text style = {{display: editMode? 'flex':'none'}} > X </Text>
                </Pressable>
                </View>
            );
        });
    });
    const [postType,setPostType] = useState('myPosts');
    //query for deleting a tag from db
    const deleteTag = (tag) => {
        function checkTag(searchedTag){
            return searchedTag===tag;
        }
        const index = tags.findIndex(checkTag);
        const temporaryTags = tags;
        temporaryTags.splice(index,1);
        setTags(temporaryTags);
        setTagList((editMode) => {
            return tags.map( (tag) => {
                return (
                    <View style = {styles.tagView}> 
                    <Text> {tag} </Text>
                    <Pressable onPress = {() => {deleteTag(tag)}}> 
                        <Text style = {{display: editMode? 'flex':'none'}} > X </Text>
                    </Pressable>
                    </View>
                );
            });
        });
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    const getImage = () => {
        const postnumber = getRandomInt(300);
        const link = 'https://picsum.photos/150/'+String(postnumber);
        return link;
    }
    const editing = () => {
        const mode = editMode
        setEditMode(!mode);
    }
    const editTags = () => {
        return (
          prompt(
            'Select tags',
            'Select the tags you wish to be displayed on your profile. These tags help you find friends, or Reach Out to people who have gone through the same experiences as you',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'email-address',
                cancelable: false,
                
                placeholder: 'placeholder'
            }
          )
        );
    }
    return (
        <ScrollView style={{
            flex: 0,
            padding: '2%',
            backgroundColor: "white",
            flexDirection: "column",
            width: '100%',
        }}>
            <View> 
            <TouchableOpacity  id= "editButton" onPress={() => {editing()} } title ="Edit "> 
                <Image source= {require('../../../assets/editing.png')} style={{display: editMode? "none":'flex',color:editMode? "red":"blue", marginLeft: '88%',paddingTop:"5%", width: 30, height: 30}}/>
                <View style= {{textAlign: "center" ,alignItems: 'center',backgroundColor: colors.light_grey, borderRadius: 10, marginLeft: '80%',marginBottom: '4%',marginRight: '3%'}}>
                            <Text style = {{display: editMode? "flex":'none',padding: '9%', color: colors.blue, fontWeight: '900'}}>Done</Text>
                        </View> 
            </TouchableOpacity>
            </View>
            <View style = {styles.header}>
                <Image style = {styles.profileImage}source={require('./../../../assets/man.png')}/> 
                <Text style = {{display: editMode? 'none':'flex',fontWeight:'700',paddingTop:'1.5%',fontSize: 20, color: colors.black}}> {displayName} </Text>
                <TextInput style = {{display: editMode? 'flex':'none', borderColor: colors.light_grey, borderWidth: 2, borderRadius: 10, marginTop: '1.5%',padding: '1%'}}
                           defaultValue = {displayName}
                           onChangeText = {name => setDisplayName(name)}
                           onSubmitEditing = {editing}
                />
            </View>
            <View style = {styles.bioAndTags}>
                <Text style = {{fontWeight:'700',paddingBottom:'5%',fontSize: 18}} > Bio: </Text>
                <Text style = {{display: editMode? 'none':'flex',fontSize: 17}}> {bio} </Text>
                <TextInput style = {{display: editMode? 'flex':'none', borderWidth: 2, padding: '2%', borderRadius: 10,borderColor: colors.light_grey}}
                           defaultValue = {bio}
                           onChangeText = {bio => setBio(bio)}
                           onSubmitEditing = {editing}
                />
                <View style = {{width: '100%', flexDirection: 'row'}}> 
                    <Text style = {{fontWeight:'700',width: '77%', paddingVertical:5,fontSize: 18, alignSelf: 'flex-start'}} > Tags: </Text>
                    <View style = {{fontSize: '13%', display: editMode? 'flex':'none', alignSelf: 'flex-end', alignContent: 'flex-end', textAlign: 'flex-end'}}> 
                        <TouchableOpacity onPress={() => editTags()} backgroundColor = "red">  
                        <View style= {{backgroundColor: colors.light_grey, borderRadius: 10, marginBottom: '4%', marginTop: '5%'}}>
                            <Text style = {{padding: '2%', color: colors.red, fontWeight: '900'}}>Edit Tags</Text>
                        </View> 
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.tagsGroup}>
                    {tagList}
                </View>
            </View>
            <View style = {styles.postBox}> 
                <View style = {{flex:1,flexDirection: 'row', width: '100%', backgroundColor: colors.light_grey,paddingVertical: 2,marginVertical: 2, paddingHorizontal: '5%', alignContent: 'center',justifyContent: 'center'}}>
                    <TouchableOpacity onPress={ () => setPostType('myPosts')}  style= {{ width:'50%',alignContent: 'center',textAlign:'center', justifyContent:'center', borderRightWidth: 1}}>
                        <View style= {{ width:'100%',alignItems:'center',  textAlign: 'center'}}> 
                            <Text> My Posts</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => setPostType('likedPosts')} style= {{width:'50%',alignContent: 'center',textAlign:'center', justifyContent:'center'}}>
                        <View style= {{ width:'100%', alignContent: 'center',alignItems:'center', textAlign: 'center'}}> 
                            <Text> Liked Posts </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection: 'column', borderWidth: 1,borderColor: colors.black, width:'100%'}}>
                    <View style={{flex:1,flexDirection: 'row',borderColor: colors.black, width:'100%'}}>
                        <View style = {{display: (postType === 'myPosts')? 'flex':'none',width: '50%'}}>  
                        <TouchableOpacity onPress = {()=> navigation.navigate("Post")}style = {{flex:1,flexDirection: 'column',display: (postType === 'myPosts')? 'flex':'none'}}>
                        <Image style = {{margin: 2 }} source = { { 
                                        uri: getImage(),
                                        width: 150,
                                        height: 100,
                                        padding: 3} }
                                />
                        </TouchableOpacity>
                        </View>
                        <View style = {{display: (postType === 'myPosts')? 'flex':'none',width: '50%'}}>  
                        <TouchableOpacity onPress = {()=> navigation.navigate("Post")} style = {{flex:1,flexDirection: 'column',display: (postType === 'myPosts')? 'flex':'none'}}>
                        <Image style = {{margin: 2 }} source = { { 
                                        uri: getImage(),
                                        width: 150,
                                        height: 100,} }
                                />
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection: 'row',borderColor: colors.black, width:'100%'}}>
                        <View style = {{display: (postType === 'myPosts')? 'flex':'none',width: '50%'}}>  
                        <TouchableOpacity onPress = {()=> navigation.navigate("Post")}style = {{flex:1,flexDirection: 'column',display: (postType === 'myPosts')? 'flex':'none'}}>
                        <Image style = {{margin: 2 }} source = { { 
                                        uri: getImage(),
                                        width: 150,
                                        height: 100,
                                        padding: 3} }
                                />
                        </TouchableOpacity>
                        </View>
                        <View style = {{display: (postType === 'myPosts')? 'flex':'none',width: '50%'}}>  
                        <TouchableOpacity onPress = {()=> navigation.navigate("Post")} style = {{flex:1,flexDirection: 'column',display: (postType === 'myPosts')? 'flex':'none'}}>
                        <Image style = {{margin: 2 }} source = { { 
                                        uri: getImage(),
                                        width: 150,
                                        height: 100,} }
                                />
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection: 'row',borderColor: colors.black, width:'100%'}}>
                        <View style = {{display: (postType === 'myPosts')? 'flex':'none',width: '50%'}}>  
                        <TouchableOpacity onPress = {()=> navigation.navigate("Post")}style = {{flex:1,flexDirection: 'column',display: (postType === 'myPosts')? 'flex':'none'}}>
                        <Image style = {{margin: 2 }} source = { { 
                                        uri: getImage(),
                                        width: 150,
                                        height: 100,
                                        padding: 3} }
                                />
                        </TouchableOpacity>
                        </View>
                        <View style = {{display: (postType === 'myPosts')? 'flex':'none',width: '50%'}}>  
                        <TouchableOpacity onPress = {()=> navigation.navigate("Post")} style = {{flex:1,flexDirection: 'column',display: (postType === 'myPosts')? 'flex':'none'}}>
                        <Image style = {{margin: 2 }} source = { { 
                                        uri: getImage(),
                                        width: 150,
                                        height: 100,} }
                                />
                        </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
                <View style={{width: '100%', display: (postType === 'likedPosts')? 'flex': 'none'}}>
                            <Text style={{padding: '16%', fontWeight: "700"}}> You haven't liked any posts yet</Text>
                </View>
            </View>
        </ScrollView>
    );
}