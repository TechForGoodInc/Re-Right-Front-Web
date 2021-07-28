import React, { useState } from "react";
import { StyleSheet, Text, Modal, View, Pressable, TouchableOpacity, Button, Platform } from "react-native";
import colors from "../../../config/colors";
const backgroundColors = [colors.black, colors.blue, colors.cream, colors.dblue, colors.grey, colors.primary, colors.secondary, colors.red, colors.light_grey, colors.lightblue, "green", "orange"]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const chooseRandomColor = (max)=> {
    return backgroundColors[max];
}
const StylizedPostScreen = ({navigation}) => {
    const [chooseBackground, setChooseBackground] = useState(false)
    return ( 
        <View> 
        <View style= {{opacity: chooseBackground? 0.5:1}}>
            <Text> Stylized Posts</Text>
            <Pressable onPress={()=> setChooseBackground(true)} style={styles.button}>
            <Text style={{color: "white"}}> Choose Background </Text> 
            </Pressable>
        </View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={chooseBackground}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setChooseBackground(!chooseBackground);
            }}>
                <View style= {styles.selecterView}>
                    <View style={styles.selcterViewHeader}>
                        <Button onPress={() => setChooseBackground(!chooseBackground)} title="Cancel"/> 
                        <View style={styles.headerTextSpace}> 
                            <Text style={styles.headerText}> 
                                Choose Background
                            </Text>  
                        </View>
                        <Button title="Done"/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity>
                        <View style={styles.color}> 
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.color}> 
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.color}> 
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.color}> 
                        </View>
                    </TouchableOpacity>
                    </View>
                    {/*<View style={{flexDirection:'row'}}>
                    <TouchableOpacity>
                        <View style={styles.color}> 
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.color}> 
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.color}> 
                        </View>
                    </TouchableOpacity>
                    
                    </View>
                </View> */}
                </View>
            </Modal>
        </View>
     );
}
 
export default StylizedPostScreen;

const styles  = StyleSheet.create({

    button: {
        backgroundColor: colors.blue,
        width: Platform.OS!='web' ? '80%' : 200,
        marginBottom: '6%',
        textAlign:'center',
        padding: 10,
        borderRadius: 10,
        color: colors.white,
        alignSelf: 'center'
    },
    selecterView:{
        position: 'absolute',
        bottom: 0,
        height: '85%',
        backgroundColor: colors.white,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        width:'100%',
    },
    selcterViewHeader: {
        height: '8%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: colors.light_grey,
        shadowColor: colors.light_grey,
        shadowOpacity: 0.9,
        shadowOffset: {
            width: 2,
            height: 2
          },
    },
    headerTextSpace: {
        width: '60%',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 16
    },
    color: {
        height: 70,
        width: 70,
        backgroundColor: chooseRandomColor(getRandomInt(backgroundColors.length))
    }
});