import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, Pressable, TouchableOpacity, Button, Platform } from "react-native";
import colors from "../../../config/colors";

const colorBarColors = [ 
    {primaryColor: 'white'},
    { primaryColor: "#C00000" },
    { primaryColor: "#FF0000"},
    { primaryColor: "#FFC000"},
    { primaryColor: "#FFFF00"},
    { primaryColor: "#92D050"},
    { primaryColor: "#00B050"},
    { primaryColor: "#00B0F0"},
    { primaryColor: "#0070C0"},
    { primaryColor: "#002060"},
    { primaryColor: "#7030A0"},
    { primaryColor: 'black'}
    ]
const numberOfPrimaryColors = colorBarColors.length
const StylizedPostScreen = ({navigation}) => {
    // setting up all the variables that can be changed by the user
    const [backgroundType, setBackgroundType] = useState ('solid');
    // different background types
    const [solidBackground, setSolidBackground] = useState(colors.blue);
    const [textureBackground, setTextureBackground] = useState('none');
    const [imageBackground, setImageBackground] = useState('none');
    // Editor for solid backgrounds
    const [solidEditorOn,setSolidEditorOn] = useState(true)
    const enterSolidMode = () => {setSolidEditorOn(true); setTextureEditorOn(false);setImageEditorOn(false)}
    const SolidBackgroundEditor = () => {
        const primaryColorBar = colorBarColors.map((colorCombo) => 
                
                <TouchableOpacity 
                    onPress={()=> {setBackgroundType('solid');setSolidBackground(colorCombo.primaryColor)}}
                    key={colorBarColors.indexOf(colorCombo)} 
                    style = {[{backgroundColor:colorCombo.primaryColor,width: 100/colorBarColors.length + '%'}]}>
                </TouchableOpacity>
                
        );
        return(
            <View style ={{ flex:1, display: solidEditorOn? 'flex' : 'none'}}>
                <View style = {styles.editorContent}> 
                    <Text style={{fontSize: 19}}> 
                        Solid Editor
                    </Text>
                        <View style={styles.colorBar}>
                            {primaryColorBar}
                        </View>
                </View>
                <View style={styles.navigationDotsView}>
                        <View style= {styles.closedDot}></View>
                        <Pressable onPress={enterTextureMode}> 
                        <View style={styles.openDot}></View>
                        </Pressable>
                        <Pressable onPress={enterImageMode}> 
                        <View style={styles.openDot}></View>
                        </Pressable>
                </View>
            </View>
        );
    }
    // Editor for texture backgrounds
    const [textureEditorOn,setTextureEditorOn] = useState(false)
    const enterTextureMode = () => {setSolidEditorOn(false); setTextureEditorOn(true);setImageEditorOn(false)}
    const TextureBackgroundEditor = () => {
        return(
            <View style ={{ flex:1, display: textureEditorOn? 'flex' : 'none'}}>
                <View style = {styles.editorContent}> 
                    <Text> Texture Editor</Text>
                </View>
                <View style={styles.navigationDotsView}>
                        <Pressable onPress={enterSolidMode}> 
                        <View style= {styles.openDot}></View>
                        </Pressable>
                        <View style={styles.closedDot}></View>
                        <Pressable onPress={enterImageMode}> 
                        <View style={styles.openDot}></View>
                        </Pressable>
                </View>
            </View>
        );
    }
    // Editor for image backgrounds
    const [imageEditorOn,setImageEditorOn] = useState(false)
    const enterImageMode = () => {setSolidEditorOn(false); setTextureEditorOn(false);setImageEditorOn(true)}
    const ImageBackgroundEditor = () => {
        return(
            <View style ={{ flex:1, display: imageEditorOn? 'flex' : 'none'}}>
                <View style = {styles.editorContent}> 
                    <Text> Image Editor</Text>
                </View>
                <View style={styles.navigationDotsView}>
                        <Pressable onPress={enterSolidMode}> 
                        <View style= {styles.openDot}></View>
                        </Pressable>
                        <Pressable onPress={enterTextureMode}> 
                        <View style={styles.openDot}></View>
                        </Pressable>
                        <View style={styles.closedDot}></View>
                </View>
            </View>
        );
    }
    return ( 
        <View style = {styles.container}>
            {/* The post is Displayed Here */}
            <View style = {[{backgroundColor: backgroundType === 'solid'? solidBackground : 'black'},styles.postView]}>
            </View>
            {/* Background Type Chooser */}
            <View style ={styles.backgroundChooser}>
                <View style={{width:'33%'}}>
                    <TouchableOpacity
                        onPress = {enterSolidMode}
                        style ={styles.backgroundTypeButton}>
                            <Text style= {styles.heading}> Solid Fill </Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'33%'}}>
                    <TouchableOpacity 
                        onPress = {enterTextureMode}
                        style ={styles.backgroundTypeButton}>
                            <Text style= {styles.heading}> Texture</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'33%'}}>
                    <TouchableOpacity 
                        onPress = {enterImageMode}
                        style ={styles.backgroundTypeButton}>
                            <Text style= {styles.heading}> Image </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.editor}>
                <SolidBackgroundEditor/>
                <TextureBackgroundEditor/>
                <ImageBackgroundEditor/>
            </View>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width : '100%',
        flex:1,
        flexDirection: 'column'
    },  
    postView: {
        width: '100%',
        height: '50%',
        borderWidth: 1,
        borderColor: colors.grey
    },
    backgroundChooser: {
        flex:0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '5%',
        borderBottomWidth: 1.9,
        borderTopWidth: .9,
        borderColor: colors.light_grey,
        shadowColor: colors.light_grey,
        shadowOpacity: 0.9,
        shadowOffset: {
            width: 2,
            height: 2
          },
    },
    backgroundTypeButton: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontWeight: '600',
        fontSize: 14
    },
    editor: {
        flex:1,
    },
    editorContent: {
        flex:1,
        padding: '6%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    colorBar: {
        width: '93%',
        height: '13%',
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    primaryColorBar: {
        width : 100,
        height : '100%'
    },
    navigationDotsView: {
       width: '5%',
       height: '3%',
       alignSelf: 'center',
       position: 'absolute',
       flexDirection: 'row',
       justifyContent: 'center',
       bottom: 50,
    },
    closedDot: {
        width: '5%',
        backgroundColor: colors.grey,
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 100,
        margin: 5,
        padding: 5
    },
    openDot: {
        width: '5%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 120,
        margin: 5,
        padding: 5
    }
    
})
export default StylizedPostScreen;

// const styles  = StyleSheet.create({

// });