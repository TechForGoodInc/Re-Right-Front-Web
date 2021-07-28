import React from 'react';
import { StyleSheet } from 'react-native';
import colors from './colors';

export const AppStyles = StyleSheet.create({
    StackHeaderStyle: { // Currently used by all stack navs
        backgroundColor: colors.blue,
        borderBottomColor: colors.black,
        borderBottomWidth: 1,
        shadowColor: colors.black,
        shadowRadius: 10,
    },
    ProfileStackHeaderStyle: { // Not used currently, but we can customize individual stacks like this
        backgroundColor: colors.red,
    },
    StackTitleStyle: {
        fontWeight: 'bold',
        letterSpacing: 0.25,
        fontSize: '125%',
        color: colors.white,
    },

    TabBarStyle: {
        backgroundColor: colors.blue,
        borderTopColor: colors.black,     
    },
})