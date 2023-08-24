import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Constants}  from '../Utility/imdex';
import login from '../Components/Screen/Login/login';
import Splash from '../Components/Screen/Splash/Splash';
import signup from '../Components/Screen/Signup/signup';
import home from '../Components/Screen/Home/home';
import BottomTabNavigator from './BottomTabNavigation';



const Stack = createNativeStackNavigator();

const Appstack = () => {
  return (
   <View style={{flex:1}}>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name={Constants.SCREEN_SPALSH} component={Splash} />
            <Stack.Screen name={Constants.SCREEN_LOGIN} component={login} />
            <Stack.Screen name={Constants.SCREEN_SINGUP} component={signup}/>
            <Stack.Screen name={Constants.SCREEN_BOTTOMTABNAVIGATION} component={BottomTabNavigator}/>
        </Stack.Navigator>
    </NavigationContainer>
   </View>
  )
}

export default Appstack;