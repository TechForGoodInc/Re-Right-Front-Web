//Rename to App.js to run
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  StyleSheet,
  Text,
  Image,
  Alert,
  SafeAreaView,
  Pressable,
} from 'react-native';

import ChatScreen from './Chat.js';
import PostScreen from './Post.js';
import FriendsScreen from './Friends.js';

const backgcolor = 'dodgerblue';
const feedcolor = 'white';
const pad = 10;
const regularflex = 1;
const feedflex = 6;

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: backgcolor,
        flex: regularflex,
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}>
      {/* Top */}
      <SafeAreaView
        style={{
          // backgroundColor: "tomato",
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        <Image
          source={require('./assets/HMIcon.png')}
          style={styles.menuicon}
        />
        <Text
          style={{
            alignItems: 'center',
          }}>
          W E L C O M E
        </Text>
        <Image
          source={require('./assets/ProfileIcon.png')}
          style={styles.menuicon}
        />
      </SafeAreaView>

      {/* Middle */}
      <SafeAreaView
        style={{
          flex: feedflex,
          padding: pad,
          backgroundColor: feedcolor,
          flexDirection: 'row',
          width: '90%',
          height: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text> F E E D</Text>
      </SafeAreaView>

      {/* Bottom */}
      <SafeAreaView
        style={{
          flex: regularflex,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
        }}>
        <Pressable onPress={() => navigation.navigate('Chat')}>
          <Image
            source={require('./assets/ChatIcon.png')}
            style={styles.menuicon}
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Post')}>
          <Image
            onPress
            source={require('./assets/PostIcon.png')}
            style={styles.menuicon}
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Friends')}>
          <Image
            source={require('./assets/FriendsIcon.png')}
            style={styles.menuicon}
          />
        </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Friends" component={FriendsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menuicon: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
});
