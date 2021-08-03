//Rename to App.js to run
import React, { useState } from 'react';
import colors from '../../../config/colors';
import { RefreshControl, View, StyleSheet, Text, Image, SafeAreaView, ScrollView, Pressable, Touchable, Platform } from 'react-native';
import SamplePost from './SamplePost';
import { useEffect } from 'react';
import { AppStyles } from '../../../config/styles';
import '../../../config/global';
const pad = 10;
const feedflex = 6;

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}



export default function HomeScreen({route,navigation}) {
    //getting the darkmode from the stackNav
    var {isItDark} = route.params;
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
          width: '100%',
          height: '100%',
          alignSelf: "center",
          justifyContent: "center",
          alignContent: 'center',
          alignItems: "center",
          backgroundColor: isItDark ? "black" : colors(isItDark).white
        }}>
          <ScrollView 
          style={styles.feed}
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
  feed: {
    flex:1,
    alignContent: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  posts: {
    flex:1,
    flexDirection: 'column',
    width: '100%',
  }
});



