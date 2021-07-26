//Rename to App.js to run
import React from 'react';
import colors from '../../config/colors';
import { RefreshControl, View, StyleSheet, Text, Image, SafeAreaView, ScrollView, Pressable, Touchable } from 'react-native';
import SamplePost from './SamplePost';

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
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
      <SafeAreaView style={{
        flex: feedflex,
        padding: pad,
        backgroundColor: "white",
        flexDirection: "column",
        width: '98%',
        height: '100%',
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text/>
        <ScrollView 
        directionalLockEnabled = 'true'
        style="styles.feed"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          /> }
        >
        <View style= {styles.posts}>
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        < SamplePost />
        </View>
        </ScrollView>
      </SafeAreaView>
  );
}

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
    width: '10%',
  },
  posts: {
    flex:1,
    flexDirection: 'column',
    width: '100%',
  },
  
});


