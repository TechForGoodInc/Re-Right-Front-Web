import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

//all the styles for Sign Up Screen 1 is here

//numerical values to be used for styling
const viewConstants = {
    containerTopMargin: '10%',
    containerBottomMargin: '16%',
    containerHorizontalMargins: '7%',
    headingFontSize: 34,
    headingFontSizeLandscape: 50,
    headerBottomMargin: 18,
    textSize: 15,
    textSizeLandscape: 18,
    headerTextLandscapePadding: 80,
    labelPadding: 10,
    textBoxBorderWidth: 2,
    textBoxBorderRadius: 10,
    textBoxPadding: 10
}

export default function GetSignUp1Style (colors) {
    //getting the dimensions and the orientation
    const { landscape } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    return {
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
                fontWeight: '800',
                fontSize: ( landscape|| width>height) ? viewConstants.headingFontSizeLandscape: viewConstants.headingFontSize,
                color: colors.blue,
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
            details: {
                flex:1,
                flexDirection: 'column',
                marginHorizontal: 40
            },
            password: {
                flex:1,
                flexDirection: 'column',
                marginHorizontal: 40
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
                fontSize: 16,
                lineHeight: 21,
                fontWeight: 'bold',
                letterSpacing: 0.25,
                color: 'white',
            },
            continueButton: {
                width: "100%",
                height: 70,
                justifyContent: "center",
                alignItems: "center",
            }, 
        }    
}