//Rename to App.js to run
import React from 'react';
import colors from '../../../config/colors';
import { RefreshControl, View, StyleSheet, Text, Image, SafeAreaView, ScrollView, Pressable, Touchable, Platform } from 'react-native';
import SamplePost from './SamplePost';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
const pad = 10;
const feedflex = 6;

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function HomeScreen() {
   
    const [refreshing, setRefreshing] = React.useState(false);
    
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
    useEffect(() => {
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
          backgroundColor: colors.background_screen,
        }}>
          <ScrollView 
          style={{backgroundColor: colors.background_scrollview}}
          direction alLockEnabled = 'true'
          refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          /> }
          >
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
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



