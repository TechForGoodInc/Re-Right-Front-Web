//Rename to App.js to run
import React from 'react';
import colors from '../../config/colors';
import { RefreshControl, View, StyleSheet, Text, Image, SafeAreaView, ScrollView } from 'react-native';

const backgcolor = colors.white;
const feedcolor = "white"
const pad = 10;
const regularflex = 1;
const feedflex = 6;

const usernames = ["@davidgross", "@hanyyacoub","@malavmevada", "@mariamatthews","@matthewdeangelo","@moisesvenouziou","@nathancook","@nicolasprate","@nyuneihlaing","@prachipatel","@shaylingzhao","@yacoubabulubad","@zeelpatel","@tarafishman","@abhinavgupta" ];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const getUsername = () => {
  const index = getRandomInt(usernames.length)
  return usernames[index];
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
        flexDirection: "row",
        width: '98%',
        height: '100%',
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text/>
        <ScrollView 
        style="styles.feed"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          /> }
        >
        <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View><View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View><View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View><View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View><View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
          </View>
          <View style="styles.postContainer">
            <Text style = "styles.postHeader" > Post by { getUsername() } </Text>
              <View style="styles.post">
                <Image source = { { 
                    uri: 'https://picsum.photos/200' ,
                    width: '100%',
                    height: 400,} }
                  />
              </View>
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
    width: '90%',
  },
  post: {
    flex:1,
    backgroundColor: colors.light_grey,
    height: 100,
    borderColor: "black",

  },
  postHeader: {
    fontWeight: '900'
  },
  postContainer: {
    borderColor: "black",
    marginVertical: 20
  },
});



