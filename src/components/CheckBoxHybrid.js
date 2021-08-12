import React from 'react';
import { Platform, CheckBox } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
// External imports above, internal imports below

export default function CheckBoxHybrid() {
    if (Platform.OS === 'web') {
        return (
            <input type="CheckBox"/>
        )
    }
    if (Platform.OS === 'ios') {
        return (
            <BouncyCheckbox/>
        )
    }
    if (Platform.OS === 'android') {
        return (
            <CheckBox/>
        )
    }
}