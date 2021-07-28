import React from 'react';
import { StyleSheet } from 'react-native';
import colors from './colors';

export const AppStyles = StyleSheet.create({
    StackHeaderStyle: { // Currently used by all stack navs
        backgroundColor: colors.blue,
    },
    ProfileStackHeaderStyle: { // Not used currently, but we can customize individual stacks like this
        backgroundColor: colors.red,
    },
})