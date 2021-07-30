import React, { useState } from "react";
import { Text } from "react-native";

const StylizedPostScreen2 = ({navigation}) => {
    // text and the layout of text
    const [postText, setPostText] = useState('');
    return ( 
        <Text>
            Write Text
        </Text>
     );
}
 
export default StylizedPostScreen2;