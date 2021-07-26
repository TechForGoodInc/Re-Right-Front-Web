import React from 'react'
import {
    View,
    Text,
    StyleSheet,
  } from "react-native";
import colors from '../../config/colors';

export default function ReportAbuseRecapArticle({route}) {

    const {title, description} = route.params;

    return (
        <View style= {styles.background}>
            <Text style= {styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    background:{
        alignItems: 'center',
        backgroundColor: colors.white,
        flex:1,
    }, 

    title: {
        fontSize: 21,
        // alignSelf: 'center',
        marginTop: 30,
        marginBottom: 10,
        fontWeight: 'bold',
    },

    description: {
        alignSelf: 'center',
        lineHeight: 35,
        fontSize: 16,
        margin: 20,
    }

});
