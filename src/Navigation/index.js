import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Constants}  from '../Utility/imdex';
import login from '../Components/Screen/Login/login';
import signup from '../Components/Screen/Signup/signup';
import BottomTabNavigator from './BottomTabNavigation';
import AddAddress from '../Components/Screen/AddAddress/AddAddress';
import Order from '../Components/Screen/Order/Order';
import Offers from '../Components/Screen/Offers/Offers';
import SuccessOrder from '../Components/Screen/SuccesOrder/SuccessOrder';



const Stack = createNativeStackNavigator();

const Appstack = () => {
  return (
   <View style={{flex:1}}>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name={Constants.SCREEN_LOGIN} component={login} />
            <Stack.Screen name={Constants.SCREEN_SINGUP} component={signup}/>
            <Stack.Screen name={Constants.SCREEN_BOTTOMTABNAVIGATION} component={BottomTabNavigator}/>
            <Stack.Screen name={Constants.SCREEN_ADD_ADDRESS} component={AddAddress}/>
            <Stack.Screen name={Constants.SCREEN_ORDER} component={Order}/>
            <Stack.Screen name={Constants.SCREEN_OFFERS} component={Offers}/>
            <Stack.Screen name={Constants.SCREEN_SUCCESS} component={SuccessOrder}/>
        </Stack.Navigator>
    </NavigationContainer>
   </View>
  )
}

export default Appstack;