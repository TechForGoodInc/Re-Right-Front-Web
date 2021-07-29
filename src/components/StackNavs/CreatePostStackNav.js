import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import CreatePostScreen from '../../screens/HomeScreens/CreatePostScreen';
import DevicePostScreen from '../../screens/HomeScreens/DevicePostScreen';
import TextPostScreen from '../../screens/HomeScreens/TextPostScreen';
import StylizedPostScreen from '../../screens/HomeScreens/StylizedPostScreen';
import StylizedPostScreen2 from '../../screens/HomeScreens/StylizedPostScreen2';
import colors from '../../../config/colors';

import { AppStyles } from '../../../config/styles';
import StackHeaderBackImage from '../StackHeaderBackImage';

const StackHeaderStyle = AppStyles.StackHeaderStyle;
const StackTitleStyle = AppStyles.StackTitleStyle;
const StackBackTitleStyle = AppStyles.StackBackTitleStyle;

const Stack = createStackNavigator();

export default function CreatePostStackNav({navigation}) {
    const handleHamburgerPress = () => {
        navigation.openDrawer();
    }
    const handleCrossPress = () => {
        navigation.navigate('Create Post');
    }
    const handleStylizedNextPress = () => {
        navigation.navigate('Stylized Post Screen 2');
    }
    return (
        <Stack.Navigator initialRoute="Create Post" screenOptions={{
            headerStyle: StackHeaderStyle,
            headerTitleStyle: StackTitleStyle,
            headerBackImage: StackHeaderBackImage,
            headerBackTitleStyle: StackBackTitleStyle }}>
            <Stack.Screen name="Create Post" component={CreatePostScreen}
                options={{title: "Create Post", headerRight: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../../assets/HMIcon.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    )}} />
            <Stack.Screen name="Create Stylized Post" component={StylizedPostScreen}
                options= {{title: "Choose Background",headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleCrossPress }>
                        <Image source={require('../../../assets/cross-round.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    ), headerRight: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleStylizedNextPress }>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}> 
                            <Text style= {{ alignSelf: 'center', color: colors.blue, paddingHorizontal: 2}}> 
                                Next {'>'}
                            </Text>  
                        </View>
                    </TouchableOpacity>
                    )}}
            />       
            <Stack.Screen name="Stylized Post Screen 2" component={TextPostScreen}/>
            <Stack.Screen name="Create Text-Only Post" component={TextPostScreen}/>
            <Stack.Screen name="Choose From Device" component={DevicePostScreen}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    menuicon: {
      width: 40,
      height: 40,
      resizeMode: "contain",
      marginRight: 10
    },
  });