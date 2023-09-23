import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './Redux/Store/Store';
import MainContainer from './Components/Screen/mainContainer';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2500);
  }, []);
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
