import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
// External imports above, internal imports below
import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

export default function AboutReportAbuseScreen() {
    const colors = global.isDarkModeEnabled? darkColors: color; 
    // Screen styles exist inside function declaration rather than externally or imported
    // to allow toggling between light and dark mode colors dynamically. Styles could be
    // refactored into an extenal function call (see SignupScreen1 for example).
    const styles = StyleSheet.create({
        background: {
            backgroundColor: colors.background_screen,
        }
    })
    return (
        <SafeAreaView style={styles.background}>

        </SafeAreaView>
    )
}
