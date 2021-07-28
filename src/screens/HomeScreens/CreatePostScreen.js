import React, { useState } from 'react';
import { Button, Modal, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'

import colors from '../../../config/colors';

export default function CreatePostScreen({navigation}) {

    return (
        <SafeAreaView forceInset={{bottom: 'always'}} style={styles.container}>
        {/* Description of different types of posts */}
        
            <View style={styles.desciptionView}> 
            <Text style={styles.title}>
                Post Types
            </Text>
            <Text 
                numberOfLines='5' 
                style={styles.subtitle}> 
                You can create a post that spreads a positive message or just share your thoughts or upload any custom post from your device.
            </Text>
            {/* Boxes for each type of Post */}
            <View style={styles.postTypeView}>
                <Text style = {styles.description} numberOfLines='5'> 
                    Create a custom post that makes an impact. Choose a background from our range of amazing backgrounds and add stylized text to make an inspiring or motivating post.
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Create Stylized Post')}}>
                    <Text style= {{color: colors.white, fontWeight: '900'}}> + Choose Stylized Post Type </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.postTypeView}>
                <Text style = {styles.description} numberOfLines='5'> 
                    Create a text-only post. Share your opinions, thoughts, or your own story in a brief paragraph. Don't worry, we won't show this post to anyone but your friends unless you choose otherwise.
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Create Text-Only Post')}}>
                    <Text style= {{color: colors.white, fontWeight: '900'}}> + Choose Text Post Type </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.postTypeView}>
                <Text style = {styles.description} numberOfLines='5'> 
                    Share art, images, or videos from your device. Make sure you don't post a picture with your face in it if you wish to remain anonymous on this platform.
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Choose From Device')}}>
                    <Text style= {{color: colors.white, fontWeight: '900'}}> + Choose From Device </Text>
                </TouchableOpacity>
            </View>
            </View>   
        </SafeAreaView>
    );
}

const styles  = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        height: '100%',
    },
    desciptionView: {
        marginHorizontal: 25,
        paddingTop: 20,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 21,
        alignSelf: 'flex-start',
        color: colors.black,
        fontWeight: '800',
        padding: 10
    },
    subtitle: {
        fontSize: 15,
        marginTop: 5,
        marginBottom: 10,
        color: colors.black,
      },
    postTypeView: {
        backgroundColor: colors.white,
        width: Platform.OS!='web' ? '95%' : 400,
        
        borderRadius: 20,
        marginVertical : '2%',
        alignItems: 'center'

    },
    description: {
        padding: '6%'
    },
    button: {
        backgroundColor: colors.blue,
        width: Platform.OS!='web' ? '80%' : 200,
        marginBottom: '6%',
        textAlign:'center',
        padding: 10,
        borderRadius: 10,
        color: colors.white,
        alignSelf: 'center'
    },
    selecterView:{
        position: 'absolute',
        bottom: 0,
        height: '85%',
        backgroundColor: colors.white,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        width:'100%'
    },
    selcterViewHeader: {
        height: '8%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: colors.light_grey,
        shadowColor: colors.light_grey,
        shadowOpacity: 0.9,
        shadowOffset: {
            width: 2,
            height: 2
          },
    },
    headerTextSpace: {
        width: '60%',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 16
    }
});

