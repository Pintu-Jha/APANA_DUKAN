import React from 'react';
import { Constants } from '../Utility/imdex';
import BottomTabNavigator from './BottomTabNavigation';
import AddAddress from '../Components/Screen/AddAddress/AddAddress';
import Order from '../Components/Screen/Order/Order';
import Offers from '../Components/Screen/Offers/Offers';
import SuccessOrder from '../Components/Screen/SuccesOrder/SuccessOrder';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={Constants.SCREEN_BOTTOMTABNAVIGATION}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Constants.SCREEN_ADD_ADDRESS}
        component={AddAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Constants.SCREEN_ORDER}
        component={Order}
        options={{headerShown: false}}
      />
      <Stack.Screen
       name={Constants.SCREEN_OFFERS}
        component={Offers}
        options={{headerShown: false}}
      />
      <Stack.Screen
       name={Constants.SCREEN_SUCCESS}
        component={SuccessOrder}
        options={{headerShown: false}}
      />
    </>
  );
}
