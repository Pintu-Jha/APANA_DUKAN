import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AppNavigator from '../../Navigation/index'
import SplashScreen from 'react-native-splash-screen';

const MainContainer = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2500);
  }, []);
  return (
    <>
        <AppNavigator/>
    </>
  )
}

export default MainContainer