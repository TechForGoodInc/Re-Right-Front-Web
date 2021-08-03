import React, { useState } from "react";
import { Text, View } from "react-native";
import { AppStyles } from "../../../config/styles";


const StylizedPostScreen2 = ({navigation}) => {
    // text and the layout of text
    const [postText, setPostText] = useState('');
    return ( 
        <View style={AppStyles.ScreenBackground}>
            <Text>Write Text</Text>
        </View>
     );
}
 
export default StylizedPostScreen2;