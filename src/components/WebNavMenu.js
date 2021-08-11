import React from 'react';
import { View, StyleSheet } from 'react-native';

import color from '../../config/colors';
import darkColors from '../../config/darkColors';
import '../../config/global';


export default function WebNavMenu() {
    const colors = global.isDarkModeEnabled? darkColors: color;
    const styles = StyleSheet.create({
        containerBackground: {
            flex: 1,
            width: '30%'
        }
    });
    return (
        <View style={styles.containerBackground}>
            <Text>Tester</Text>
        </View>
    )
}