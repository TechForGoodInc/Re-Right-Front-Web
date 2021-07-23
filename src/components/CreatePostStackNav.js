import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreatePostScreen from '../screens/CreatePostScreen';

const Stack = createStackNavigator();

export default function CreatePostStackNav({navigation}) {
    return (
        <Stack.Navigator initialRoute="Create Post" >
            <Stack.Screen name="Create Post" component={CreatePostScreen}/>
        </Stack.Navigator>
    )
}