/*
This file contains styles that are used multiple times throughout the application.
By storing these styles globally, we can alter the layout and styles of
components app wide just by editing this file.
*/
import { useEffect } from "react";
import { Platform } from "react-native";

import color from "./colors";
import darkColors from "./darkColors";
import './global';

export default function GetGlobalStyles (landscape, width, height) {
    // Determine if light or dark colors should be used (based on state of theme toggle in account settings)
    var colors = global.isDarkModeEnabled ? darkColors : color;
    //numerical values to be used for styling
    const viewConstants = {
        containerTopMargin: '10%',
        containerBottomMargin: '16%',
        containerHorizontalMargins: '7%',
        headingFontSize: 34,
        headingWeight: '800',
        headingFontSizeLandscape: width*0.04,
        headerBottomMargin: 5,
        textSize: 15,
        textSizeLandscape: 18,
        headerTextLandscapePadding: 80,
        labelPadding: 10,
        textBoxBorderWidth: 2,
        textBoxBorderRadius: 10,
        textBoxPadding: 10,
        formHorizontalMargin: 40,
        formBottomMarginLandscape: 30,
        buttonTextLineHeight: 21,
        buttonTextLineHeightLandscape: 21,
        buttonHeight: 70,
        buttonHeightLandscape: 45,
    }
    return {
            screenBackground: {
                flex: 1,
                backgroundColor: colors.background_screen
            },
            container: {
                marginHorizontal: viewConstants.containerHorizontalMargins,
                flex: 1,
                justifyContent: 'center',
                //implementing different code for differnet orientations
                flexDirection: ( landscape|| width>height)? 'row' : null,
            },
            header: {
                marginBottom: viewConstants.headerBottomMargin,
                flex: (landscape|| width>height) ? 1 : 0,
                flexDirection: 'column',
                width: ( landscape|| width>height) ? '50%' : '100%',
            },
            headerTitle: {
                fontWeight: viewConstants.headingWeight,
                fontSize: ( landscape|| width>height) ? viewConstants.headingFontSizeLandscape: viewConstants.headingFontSize,
                color: colors.text_screen_header,
                paddingVertical: ( landscape|| width>height) ? 0 : '3%',
                paddingTop: ( landscape|| width>height) ? '5%' : 0,

            },
            headerText: {
                fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
                marginEnd: ( landscape|| width>height) ? viewConstants.headerTextLandscapePadding: 0,
                paddingTop: ( landscape|| width>height) ? '5%' : 0,
                color: colors.text_general,
            },
            linkText: {
                textDecorationLine: 'underline',
                paddingVertical: '3%',
                color: colors.text_general,
                fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
                
            },
            signUpForm:{
                flex: 1,
                color: colors.text_general,
            },
            details: {
                flexDirection: 'column',
                marginHorizontal: viewConstants.formHorizontalMargin,
                marginBottom: ( landscape|| width>height) ? viewConstants.formBottomMarginLandscape : 0
            },
            password: {
                flexDirection: 'column',
                marginHorizontal: viewConstants.formHorizontalMargin,
                marginBottom: ( landscape|| width>height) ? viewConstants.formBottomMarginLandscape : 0
            },
            label: {
                fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
                padding: viewConstants.labelPadding,
                color: colors.text_general,
                marginHorizontal: ( landscape|| width>height)? viewConstants.labelPadding : 0,
                
            },
            inputText: {
                borderWidth: viewConstants.textBoxBorderWidth,
                borderColor: colors.light_grey,
                borderRadius: viewConstants.textBoxBorderRadius,
                textAlign: 'center',
                padding: viewConstants.textBoxPadding,
                fontSize:  ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
                marginHorizontal: viewConstants.textBoxPadding,
                color: colors.text_general,
            },
            screenBackground: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-end',
                backgroundColor: colors.background_screen,
            },
            buttonText: {
                fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
                lineHeight: ( landscape|| width>height) ? viewConstants.buttonTextLineHeightLandscape : viewConstants.buttonTextLineHeight,
                fontWeight: 'bold',
                color: colors.text_tab_label,
            },
            continueButton: {
                width: "100%",
                height: ( landscape|| width>height) ? viewConstants.buttonHeightLandscape : viewConstants.buttonHeight,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colors.button_continue,
                borderTopColor: colors.border,
                borderTopWidth: 1,
                shadowColor: colors.shadow,
                shadowRadius: 10, 
            }, 
            loginInputView: {
                inputbar: {
                    flex: 1,
                    justifyContent: 'center',
                    
                    ...Platform.select({
                       web: {
                           marginLeft: '30%',
                           marginRight: '30%',
                       },
                       default: {
                           marginLeft: '5%',
                           marginRight: '5%',
                       },
                    }),
                },
            },
 
            // Navigation Styles (For Stacks and Tabs)

            menuicon: {
                height: 40,
                width: 40,
                tintColor: colors.menu_icon,
            },
            settingsicon: {
                height: 30,
                width: 30,
                margin: 4,
                tintColor: colors.menu_icon
            }, 
            StackHeaderStyle: { // Currently used by all stack navs
                backgroundColor: colors.background_stack_header,
                borderBottomColor: colors.border,
                borderBottomWidth: 0.4,
                shadowColor: colors.shadow,
                shadowRadius: 5,
            },
            ProfileStackHeaderStyle: { // Not used currently, but we can customize individual stacks like this
                backgroundColor: colors.primary,
            },
            StackTitleStyle: {
                fontWeight: 'bold',
                letterSpacing: 0.25,
                fontSize: 19,
                color: colors.text_stack_title,
            },
            StackBackTitleStyle: {
                color: colors.text_stack_back_title,
            },
            TabStyle: {
                // borderColor: colors.border,
                // borderWidth: 1,
                shadowColor: colors.shadow,
                shadowRadius: 10,
                // backgroundColor: colors.tab_background
            },
            TabLabelStyle: {
                letterSpacing: 0.25,
            },
            ScreenBackground: {
                backgroundColor: colors.background_screen,
                flex: 1,
                alignItems: 'center',
            }
        }    
}