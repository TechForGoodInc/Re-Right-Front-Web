import React from 'react'
import {
    View,
     Text,
     StyleSheet,
} from "react-native";
import colors from '../../../config/colors';

export default function ReportAbuseRecapQuiz() {
    return (
        <View style={styles.background}>
            <Text>
                Test your Knowledge!
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.background_screen,
    }
})
