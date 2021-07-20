//Rename to App.js to run
import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';

const backgcolor = "dodgerblue";
const feedcolor = "white"
const pad = 10;
const regularflex = 1;
const feedflex = 6;


export default function App() {
  return (
    <SafeAreaView style={{
      backgroundColor: backgcolor,
      flex: regularflex,
      flexDirection: "column",
      justifyContent: "space-around",
    }}>
      {/* Top */}

      <SafeAreaView style={{
        // backgroundColor: "tomato",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }}>
        <Image source={require("./assets/HMIcon.png")} style={styles.menuicon} />
        <Text style={{
          alignItems: "center",
          fontSize: '30%',
        }}>
          W E L C O M E</Text>
        <Image source={require("./assets/ProfileIcon.png")} style={styles.menuicon} />
      </SafeAreaView>

      {/* Middle */}
      <SafeAreaView style={{
        flex: feedflex = 1,
        padding: pad,
        backgroundColor: feedcolor,
        flexDirection: "row",
        width: '90%',
        height: '90%',
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",

      }}>
        <Text> F E E D</Text>
      </SafeAreaView>



      {/* Bottom */}
      <SafeAreaView style={{
        flex: regularflex,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end"
      }}>
        <Image source={require("./assets/ChatIcon.png")} style={styles.menuicon} />
        <Image source={require("./assets/PostIcon.png")} style={styles.menuicon} />
        <Image source={require("./assets/FriendsIcon.png")} style={styles.menuicon} />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menuicon: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },

});



