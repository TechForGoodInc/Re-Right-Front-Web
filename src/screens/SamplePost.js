//Rename to App.js to run
import React from 'react';
import colors from '../../config/colors';
import { RefreshControl, View, StyleSheet, Text, Image, SafeAreaView, ScrollView, Pressable, Touchable } from 'react-native';
const backgcolor = colors.white;
const feedcolor = "white"
const pad = 10;
const regularflex = 1;
const feedflex = 6;

const usernames = ["@davidgross", "@hanyyacoub","@malavmevada", "@mariamatthews","@matthewdeangelo","@moisesvenouziou","@nathancook","@nicolasprate","@nyuneihlaing","@prachipatel","@shaylingzhao","@yacoubabulubad","@zeelpatel","@tarafishman","@abhinavgupta" ];
const comments = ["You're the best! Such a nice post :)","Stay strong! Your posts are the best!","Amazing picture","Please be my friend","Sending positive vibes to you","Never change! You're amazing", "This is the best thing I've seen all day!","Thanks for spreading positive energy","You made my day better","This post is what I needed today, Thank you so much", "I love Re-Right"]
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const getUsername = () => {
  const index = getRandomInt(usernames.length);
  return usernames[index];
}
const getName = () => {
  const index = getRandomInt(usernames.length);
  const user = usernames[index];
  return user.substr(1);
}
const getComment = () => {
  const index = getRandomInt(comments.length);
  return comments[index];
}

const SamplePost = () => {
    return ( 
        <View style={styles.postContainer}>
            <View style = {styles.postHeader}>
              <Text 
                style = {styles.postUsername} > { getUsername() }                                                          
              </Text>   
              <View style = {styles.postDots} > 
                <Text>                                                 ...</Text>                                                         
              </View>   
            </View>
                <Image style = {styles.post} source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
            <View style={styles.likeBar}>
                  <Pressable>
                    <Image style = {styles.likeHeartComment} source = { { 
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkns6lML4oMFvmxMM_H0055UCIPsEk152dw&usqp=CAU' ,
                    width: '12%',
                    height: 39,} }
                  />
                  </Pressable>
                  <Pressable>
                    <Image style = {styles.likeHeartComment} source = { { 
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45bKRsJCXqu3xgT5ydfKRJJRV0VK5Ms6jVg&usqp=CAU' ,
                    width: '12%',
                    height: 39,} }
                  />
                  </Pressable>
                  <Pressable>
                    <Image style = {styles.likeHeartComment} source = { { 
                    uri: 'https://static.thenounproject.com/png/638755-200.png' ,
                    width: '12%',
                    height: 49,} }
                  />
                  </Pressable>
            </View>
            <Text> {getRandomInt(99999)} likes</Text>
            <View style = {styles.wholeComment} >
              <Text style = {styles.name} numberOfLines = '3' > 
                { getName() } :
              </Text>  
              <Text numberOfLines = '3' style = {styles.comment}> 
                {getComment()} 
              </Text>
            </View>
            <View style = {styles.wholeComment} >
              <Text style = {styles.name} numberOfLines = '3' > 
                { getName() } :
              </Text>  
              <Text numberOfLines = '3' style = {styles.comment}> 
                {getComment()} 
              </Text>
            </View>
            <View style = {styles.wholeComment} >
              <Text style = {styles.name} numberOfLines = '3' > 
                { getName() } :
              </Text>  
              <Text numberOfLines = '3' style = {styles.comment}> 
                {getComment()} 
              </Text>
            </View>
          </View>
     );
}
 
export default SamplePost;

const styles = StyleSheet.create({
    menuicon: {
      width: 75,
      height: 75,
      resizeMode: "contain",
    },
    feed: {
      flex:1,
      alignItems:'center',
      alignContent: 'center',
      alignSelf: 'center',
      width: '90%',
    },
    post: {
      flex:1,
      flexDirection: 'row',
      width: '100%',
    },
    postHeader: {
      flex:1,
      flexDirection: 'row',
      width: '90%',
      textAlign: 'right'
    },
    postUsername: {
      flexDirection: 'column',
      alignSelf:'flex-start'
    },
    postDots: {
      flexDirection: 'column',
      textAlign: 'right'
    },
    postContainer: {
      borderColor: colors.light_grey,
      marginVertical: 20,
      borderWidth: 1,
      padding: 20,
      flexDirection: 'column',
      width: '90%',
    },
    likeBar: {
      paddingTop: 10,
      flex: 1,
      flexDirection: 'row',
      alignContent: 'flex-start'
    },
    wholeComment: {
      flexDirection: 'row',
      width: '80%'
    },
    name: {
      fontWeight: '700',
      flexDirection: 'column'
    },
    comment: {
      flexDirection: 'column'
    },
    likeHeartComment: {
      padding: 20,
      marginHorizontal: 10,
      flexDirection: 'column',
    },
  });