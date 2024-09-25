import React from 'react';
import { Constants } from '../Utility/imdex';
import Signup from '../Components/Screen/Signup/signup';
import Login from '../Components/Screen/Login/login';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={Constants.SCREEN_SINGUP}
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Constants.SCREEN_LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
    
    </>
  );
}
