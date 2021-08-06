import React, { useState } from "react";
import { Text, View } from "react-native";
import { AppStyles } from "../../../config/Styles";

const TextPostScreen = ({navigation}) => {
    return ( 
        <View style={AppStyles.ScreenBackground}>
            <Text>Create a Text Post</Text>
        </View>
     );
}
 
export default TextPostScreen;