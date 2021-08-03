import React from 'react';
import { StyleSheet } from 'react-native';
import color from './colors';
import darkColors from './darkColors';
import './global'

const colors = global.isDarkModeEnabled ? darkColors : color;

export const AppStyles = StyleSheet.create({
    StackHeaderStyle: { // Currently used by all stack navs
        backgroundColor: colors.background_stack_header,
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        shadowColor: colors.shadow,
        shadowRadius: 10,
    },
    ProfileStackHeaderStyle: { // Not used currently, but we can customize individual stacks like this
        backgroundColor: colors.primary,
    },
    StackTitleStyle: {
        fontWeight: 'bold',
        letterSpacing: 0.25,
        fontSize: 20,
        color: colors.text_stack_title,
    },
    StackBackTitleStyle: {
        color: colors.text_stack_back_title,
    },
    TabStyle: {
        borderColor: colors.border,
        borderWidth: 1,
        shadowColor: colors.shadow,
        shadowRadius: 10,
    },
    TabLabelStyle: {
        fontWeight: 'bold',
        letterSpacing: 0.25,
        fontSize: 16,
        color: colors.text_tab_label, 
    },
    ScreenBackground: {
        backgroundColor: colors.background_screen,
        flex: 1,
        alignItems: 'center',
    }

})