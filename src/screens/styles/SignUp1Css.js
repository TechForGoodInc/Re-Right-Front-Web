
//all the styles for Sign Up Screen 1 is here

export default function GetSignUp1Style (landscape,width, height,colors, ) {
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
                flex: 1
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
                color: colors.primary,
                paddingVertical: ( landscape|| width>height) ? 0 : '3%',
                paddingTop: ( landscape|| width>height) ? '5%' : 0
            },
            headerText: {
                fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
                marginEnd: ( landscape|| width>height) ? viewConstants.headerTextLandscapePadding: 0,
                paddingTop: ( landscape|| width>height) ? '5%' : 0,
            },
            linkText: {
                textDecorationLine: 'underline',
                paddingVertical: '3%',
                fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
            },
            signUpForm:{
                flex: 1,
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
                marginHorizontal: ( landscape|| width>height)? viewConstants.labelPadding : 0
            },
            inputText: {
                borderWidth: viewConstants.textBoxBorderWidth,
                borderColor: colors.light_grey,
                borderRadius: viewConstants.textBoxBorderRadius,
                textAlign: 'center',
                padding: viewConstants.textBoxPadding,
                fontSize:  ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
                marginHorizontal: viewConstants.textBoxPadding,
            },
            screenBackground: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-end',
                backgroundColor: colors.white,
            },
            buttonText: {
                fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
                lineHeight: ( landscape|| width>height) ? viewConstants.buttonTextLineHeightLandscape : viewConstants.buttonTextLineHeight,
                fontWeight: 'bold',
                color: 'white',
            },
            continueButton: {
                width: "100%",
                height: ( landscape|| width>height) ? viewConstants.buttonHeightLandscape : viewConstants.buttonHeight,
                justifyContent: "center",
                alignItems: "center",
            }, 
        }    
}