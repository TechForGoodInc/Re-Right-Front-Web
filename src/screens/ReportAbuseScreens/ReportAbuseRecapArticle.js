import React from 'react'
import { View, Text, StyleSheet } from "react-native";
// External imports above, internal imports below
import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

export default function ReportAbuseRecapArticle({route}) {
    const colors = global.isDarkModeEnabled? darkColors: color; 
    const {title, description} = route.params;
    // Screen styles exist inside function declaration rather than externally or imported
    // to allow toggling between light and dark mode colors dynamically. Styles could be
    // refactored into an extenal function call (see SignupScreen1 for example).
    const styles = StyleSheet.create({
        background:{
            alignItems: 'center',
            backgroundColor: colors.background_screen,
            flex:1,
        }, 
        title: {
            fontSize: 21,
            // alignSelf: 'center',
            marginTop: 30,
            marginBottom: 10,
            fontWeight: 'bold',
            color: colors.text_screen_header
        },
        description: {
            alignSelf: 'center',
            lineHeight: 35,
            fontSize: 16,
            margin: 20,
            color: colors.text_general
        }
    });
    return (
        <View style= {styles.background}>
            <Text style= {styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}


